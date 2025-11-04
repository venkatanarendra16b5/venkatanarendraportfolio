<template>
  <nav class="navbar">
    <div class="nav-inner">
      <div class="brand">
        <a href="/">Narendra Portfolio<span class="accent">.</span></a>
      </div>
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id">
          <!-- Use the isActive helper for ALL links -->
          <a :href="link.href" :class="{'is-active': isActive(link.href)}">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const currentActiveHash = ref('');

const navLinks = [
  { id: 'about', text: 'About', href: '#about' },
  { id: 'skills', text: 'Skills', href: '#skills' },
  { id: 'projects', text: 'Projects', href: '#projects' },
  { id: 'experience', text: 'Experience', href: '#experience' },
  {id: 'testimonials', text: 'Testimonials', href: '#testimonials' },
  { id: 'contact', text: 'Contact', href: '#contact' },
];

const isActive = (href) => {
  // If the current URL hash is empty (e.g., just "localhost:5174/"),
  // then "About" should be active by default.
  // Otherwise, check if the currentActiveHash exactly matches the link's href.
  if (!currentActiveHash.value && href === '#about') {
    return true;
  }
  return currentActiveHash.value === href;
};

const updateActiveSectionOnScroll = () => {
  const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);

  let detectedActiveHash = '';
  const offset = 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    if (rect.top <= offset && rect.bottom > offset) {
      detectedActiveHash = navLinks[i].href;
      break;
    }
  }

  // Fallback if no section is in the active zone
  if (!detectedActiveHash) {
    if (window.scrollY < sections[0].offsetTop - offset) {
      detectedActiveHash = '#about'; // If at the very top, default to #about
    } else if (sections.length > 0) {
        // If scrolled past all sections, maybe the last one remains active
        detectedActiveHash = navLinks[navLinks.length - 1].href;
    }
  }

  if (currentActiveHash.value !== detectedActiveHash) {
    currentActiveHash.value = detectedActiveHash;
    console.log('Active Section via Scroll:', currentActiveHash.value);
  }
};

const updateActiveSectionOnHashChange = () => {
  const hash = window.location.hash;
  // console.log('Hash Change detected:', hash); // Debugging line

  if (navLinks.some(link => link.href === hash)) {
    if (currentActiveHash.value !== hash) {
      currentActiveHash.value = hash;
      console.log('Active Section via Hash Change:', currentActiveHash.value);
    }
  } else if (!hash && currentActiveHash.value !== '#about') {
    // If hash is cleared (e.g., from #contact to /), default to #about
    currentActiveHash.value = '#about';
    console.log('Active Section cleared (no hash), defaulting to #about:', currentActiveHash.value);
  }
};


onMounted(() => {
  // Initial checks
  updateActiveSectionOnHashChange(); // Check URL hash first on load
  if (!currentActiveHash.value || currentActiveHash.value === '') {
      // If no hash in URL, or hash doesn't match a nav link, then use scroll position
      updateActiveSectionOnScroll();
  }

  // Add event listeners
  window.addEventListener('scroll', updateActiveSectionOnScroll);
  window.addEventListener('hashchange', updateActiveSectionOnHashChange);
});

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', updateActiveSectionOnScroll);
  window.removeEventListener('hashchange', updateActiveSectionOnHashChange);
});
</script>

<style scoped>
/* ... Your existing styles, they are correct for .is-active ... */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg,#0f1724, #162033);
  color: #fff;
  z-index: 1200;
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 14px 20px;
}
.brand a { color:#fff; font-weight:700; text-decoration:none; font-size:18px; }
.accent { color:#fbcc1e; }
.nav-links {
  display:flex;
  gap:18px;
  list-style:none;
  margin:0;
  padding:0;
}
.nav-links a {
  color: #dbe7ff;
  text-decoration:none;
  font-weight:500;
  padding: 5px 0;
  transition: color 0.2s ease, transform 0.2s ease;
  position: relative;
}
.nav-links a:hover {
  color: #fbcc1e;
  transform: translateY(-1px);
}
/* Target the 'is-active' class you're applying */
.nav-links a.is-active {
  color: #fbcc1e;
  font-weight: 600;
}

/* Optional: Add an underline or border for the active link */
.nav-links a.is-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fbcc1e;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

/* Default state for pseudo-element */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transform: scaleX(0);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

/* Hover effect for non-active links to show a subtle underline */
.nav-links a:not(.is-active):hover::after {
  transform: scaleX(0.5);
  background-color: #dbe7ff;
}
@media (max-width: 768px) {
  .nav-links { display:none; }
}
</style>