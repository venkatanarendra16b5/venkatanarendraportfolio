<template>
  <section id="about" class="hero section">
    <div class="hero-inner">
      <div class="left" ref="leftRef">
        <img src="/src/assets/profile.png" alt="profile" class="profile" />
      </div>
      <div class="right" ref="rightRef">
        <h1>Hi, I'm <span class="name">N. Venkata Narendra</span></h1>
        <h3 class="typed" ref="typedRef">&nbsp;</h3>
         <p class="about-text">
          I enjoy translating complex problems into elegant, maintainable solutions — whether it’s crafting
          reusable UI components, designing secure REST APIs, or integrating DevOps pipelines with Azure.
          My recent projects focus on real-time dashboards, data visualization and automation.
        </p>

        <p class="about-text">
          Beyond code, I’m a strong collaborator who believes in continuous learning, sharing ideas and helping
          teams grow together.
        </p>
        <div class="cta">
          <a class="btn primary" href="mailto:venkatanarendra16b5@gmail.com">Hire Me</a>
          <a class="btn outline" href="#projects">View Projects</a>
          <a @click="viewAndDownloadResume" class="btn btn-outline" href="javascript:void(0)">
            <i class="mdi mdi-download"></i> Download Resume
          </a>
        </div>
        <!-- <div class="socials">
          <a href="https://www.linkedin.com/in/nallabothula-venkata-narendra-a86b8b1a2/" target="_blank">LinkedIn</a> ·
          <a href="https://github.com/venkatanarendra16b5" target="_blank">GitHub</a>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'
import { gsap } from 'gsap'

const typedRef = ref(null)
const leftRef = ref(null)
const rightRef = ref(null)
const viewAndDownloadResume = () => {
  // ✅ Use import.meta.env to access environment variables in Vite
  const baseUrl = import.meta.env.VITE_BASE_URL || '/';
  const resumeUrl = `${baseUrl}resume.pdf`;

  // 1️⃣ Open the resume in a new tab
  window.open(resumeUrl, '_blank');

  // 2️⃣ Trigger automatic download
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', 'N_Venkata_Narendra_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

onMounted(() => {
  // typing
  new Typed(typedRef.value, {
    strings: ['Full Stack Developer', 'MEVN + MERN + Azure DevOps'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  })
   setTimeout(() => {
    const cursorEl = document.querySelector('.typed-cursor');
    if (cursorEl) {
      cursorEl.classList.add('typed-cursor-visible');
    }
  }, 500);
  // entry animations
  gsap.from(leftRef.value, { opacity: 0, x: -60, duration: 0.9 })
  gsap.from(rightRef.value, { opacity: 0, x: 60, duration: 0.9, delay: 0.2 })
})
</script>

<style scoped>
.section { padding: 80px 20px; }
.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  align-items: center;
}
.profile { width: 180px; height: 180px; border-radius: 50%; object-fit:fill; border: 4px solid #fbcc1e; box-shadow: 0 10px 30px rgba(11,20,40,0.25); }
.name { color: #fbcc1e; }
.about-text {
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
}
.lead { color: #334155; margin-top: 10px; max-width: 560px; }
.cta { margin-top: 14px; display:flex; gap:10px; }
.btn { padding: 10px 16px; border-radius: 8px; text-decoration:none; }
.primary { 
  border: 2px solid #efeee7; 
  color: #194e03;
}
.socials { margin-top: 12px; color: #475569; font-size: 14px; }
.typed {
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin: 2px 0;
  line-height: 1.2;
  min-height: 28px;
}
:deep(.typed-cursor),
.typed-cursor-visible {
  display: none;
  font-weight: 600;
  color: #194e03;
  animation: blink 0.8s infinite;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.outline { 
  border: 2px solid #efeee7; 
  color: #0850e0; 
}
.outline:hover {
  background: #f0f0f0;
  color: #0850e0;
}
.primary:hover {
  color: #061024;
}
.btn-outline {
  border: 2px solid #ccc;
  color: #18ea0d;
}
.btn-outline:hover {
  border-color: #efeee7;
  color: #18ea0d;
}

@media (max-width: 880px) {
  .hero-inner { flex-direction: column; text-align: center; }
  .about-text { max-width: 100%; }
}
</style>
