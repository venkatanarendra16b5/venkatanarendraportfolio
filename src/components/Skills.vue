<template>
  <section id="skills" class="section">
    <div class="container">
      <h2>Skills & Technologies</h2>
      <div class="grid" ref="gridRef">
        <div class="skill" v-for="s in skills" :key="s.name">
          <font-awesome-icon :icon="s.icon" class="skill-icon" />
          <span>{{ s.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Define your skills with associated Font Awesome icons
// 'fab' for brand icons, 'fas' for solid icons
const skills = [
  { name: "Javascript", icon: ['fab', 'js'] },
  { name: "Typescript", icon: ['fas', 'code'] }, // Example, you might find a better one
  { name: "Vue.js", icon: ['fab', 'vuejs'] },
  { name: "React.js", icon: ['fab', 'react'] },
  { name: "Docker", icon: ['fab', 'docker'] },
  { name: "Git", icon: ['fab', 'git'] },
  { name: "Jira", icon: ['fab', 'jira'] },
  { name: "Nuxt", icon: ['fas', 'layer-group'] }, // Example for Nuxt
  { name: "Quasar", icon: ['fas', 'grip-horizontal'] }, // Example for Quasar
  { name: "ECharts", icon: ['fas', 'chart-bar'] }, // Example for ECharts
  { name: "Amcharts", icon: ['fas', 'chart-pie'] }, // Example for Amcharts
  { name: "Node.js", icon: ['fab', 'node-js'] },
  { name: "Express", icon: ['fas', 'server'] }, // Example for Express
  { name: "REST APIs", icon: ['fas', 'globe'] }, // Example for APIs
  { name: "MySQL", icon: ['fas', 'database'] },
  { name: "Azure Devops", icon: ['fab', 'microsoft'] }, // Microsoft icon for Azure
  { name: "Agile Methodologies", icon: ['fas', 'users-rays'] } // Example solid icon for Agile
];

const gridRef = ref(null)

onMounted(() => {
  gsap.from(gridRef.value.children, {
    opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: "power2.out"
  })
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px; /* Add some padding to the container */
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em; /* Make heading more prominent */
  color: #333; /* Darker color for heading */
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Slightly increase gap */
  margin-top: 18px;
  justify-content: center; /* Center the skill items */
}

.skill {
  background: #1a2b4a; /* Slightly darker blue */
  color: white;
  padding: 12px 18px; /* Increase padding */
  border-radius: 10px; /* Slightly more rounded corners */
  font-weight: 600;
  display: flex; /* Use flexbox for icon and text alignment */
  align-items: center; /* Vertically center icon and text */
  gap: 8px; /* Space between icon and text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add subtle shadow */
  transition: transform 0.2s ease, background 0.2s ease; /* Smooth hover effects */
}

.skill:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  background: #2a3d60; /* Slightly lighter on hover */
}

.skill-icon {
  font-size: 1.2em; /* Make icons slightly larger */
  color: #61dafb; /* A nice accent color for icons, e.g., React blue */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h2 {
    font-size: 2em;
  }
  .grid {
    gap: 10px;
  }
  .skill {
    padding: 10px 14px;
    font-size: 14px;
  }
  .skill-icon {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8em;
  }
  .skill {
    font-size: 13px;
    padding: 8px 12px;
    gap: 6px;
  }
  .skill-icon {
    font-size: 0.9em;
  }
}
</style>