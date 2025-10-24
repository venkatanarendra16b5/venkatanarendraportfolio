<template>
  <section id="project-detail" class="section">
    <div class="container" v-if="project">
      <div class="back-link" @click="$emit('back')">
        <font-awesome-icon :icon="['fas', 'arrow-left']" /> Back to Projects
      </div>

      <h1>{{ project.title }}</h1>
      <p class="project-meta">
        <span class="meta-label">Client:</span> {{ project.client }}
      </p>
      <p class="project-meta">
        <span class="meta-label">Environment:</span> {{ project.environment.join(', ') }}
      </p>

      <div class="project-description">
        <h3>Description</h3>
        <p>{{ project.description }}</p>
      </div>

      <div class="project-contributions">
        <h3>Key Contributions</h3>
        <ul>
          <li v-for="(contribution, index) in project.contributions" :key="index">{{ contribution }}</li>
        </ul>
      </div>

    </div>
    <div v-else class="container">
      <p class="loading-error">Project not found or loading...</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
const project = ref(null);
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

// Your project data (same as in Projects.vue, but could be fetched from an API)
const allProjects = [
  {
    id: 'q-insurance',
    title: 'Q-Insurance',
    tagline: 'Comprehensive insurance management system (Admin + UI)',
    client: 'Accelq',
    environment: ['Vue.js', 'Node.js', 'Express.js', 'MySQL', 'Azure DevOps'],
    description: `Developed a comprehensive insurance management system as the sole technical resource, handling every phase from architecture design to live deployment. The platform streamlines user registrations, policy management, claims, and reporting for multiple stakeholders. Integrated Azure DevOps for efficient work item tracking, automated CI/CD release pipelines, and artifact management to support robust delivery and deployment.`,
    contributions: [
      "Built the complete frontend with Vue.js for dynamic, user-friendly interfaces.",
      "Designed RESTful APIs and business logic using Node.js and Express.js.",
      "Architected MySQL databases ensuring reliable, scalable storage.",
      "Automated build, test, and deployment workflows using Azure DevOps.",
      "Managed the product lifecycle: requirements, development, testing, deployment, and support independently."
    ],
    cardIcon: ['fas', 'shield-alt']
  },
  {
    id: 'ted-dashboard',
    title: 'TED - The Engineering Dashboard',
    tagline: 'Data-centric dashboard for KPIs and charts',
    client: 'Disney, SWA, Hilti, Kunnect, Brierly',
    environment: ['Vue.js', 'TypeScript', 'Quasar', 'Pinia', 'Node.js', 'Redis', 'MySQL', 'ECharts', 'Amcharts'],
    description: `Designed and implemented a data-centric platform unifying real-time project metrics and multi-tool data for executive dashboards. Enabled automated analysis, streamlining project oversight, and enhancing decision-making for diverse engineering teams.`,
    contributions: [
      "Developed dynamic UI with Vue.js and Quasar for KPI visualization and platform operations.",
      "Optimized application performance by 30% through refined Vue.js components, database queries, and Redis API response caching.",
      "Implemented Node.js RESTful APIs for secure, scalable communication and integrated state management with Pinia.",
      "Established Role-Based Access Control (RBAC) for admin users and integrated third-party services, ensuring secure data access and extended functionality."
    ],
    cardIcon: ['fas', 'chart-line']
  },
  {
    id: 'microservices-development',
    title: 'Micro Services Development',
    tagline: 'Aggregating data from various tools into microservices',
    client: 'Disney, SWA, Hilti, Kunnect, Brierly',
    environment: ['Node.js', 'MySQL', 'MongoDB', 'AWS SDK', 'Socket.io'],
    description: `Developed 30+ microservices to aggregate data from tools like ADO, Jira, Bitbucket, GitLab, and ServiceNow, transforming and storing required data in JSON format for streamlined database management and efficient access.`,
    contributions: [
      "Integrated external APIs across multiple tools to enable seamless data interactions.",
      "Built end-to-end microservices, ensuring scalable and efficient functionality.",
      "Implemented real-time communication with backend servers using Socket.io.",
      "Leveraged AWS SDK for secure, multi-tool authentication and access management."
    ],
    cardIcon: ['fas', 'cubes']
  },
  {
    id: 'qadmin',
    title: 'QADMIN',
    tagline: 'Admin panel for Qentelli SaaS products, managing user licenses',
    client: 'Qentelli',
    environment: ['Vue.js (Vue2)', 'Vuex', 'Vuetify', 'Node.js', 'MySQL'],
    description: `Designed and developed an admin application which is a common one for all Qentelli SaaS products. Maintained all the user license's details and license upgradation of individual user.`,
    contributions: [
      "Developed and maintained a dynamic admin panel using Vue.js and Vuetify, providing a seamless user interface for managing platform operations.",
      "Integrated state management with Vuex, ensuring efficient handling of application data and enhancing performance across the admin panel.",
      "Designed and implemented RESTful APIs using Node.js, facilitating secure and scalable communication between the frontend and backend services.",
      "Built and optimized MySQL databases, creating efficient schema designs and queries to handle large datasets for reporting and analytics."
    ],
    cardIcon: ['fas', 'user-shield']
  },
  {
    id: 'idea-board',
    title: 'Idea Board',
    tagline: 'Internal SPA platform for idea sharing, post creation, and bug reporting',
    client: 'Qentelli',
    environment: ['JavaScript', 'Node.js', 'React.js', 'Material UI', 'MySQL'],
    description: `Developed an internal SPA platform for Qentelli, enabling idea sharing, post creation, and bug reporting for internal products. Integrated Microsoft authentication for secure access via organizational email, streamlining collaborative innovation across teams.`,
    contributions: [
      "Sole developer responsible for full project lifecycle, from planning to deployment.",
      "Implemented real-time notifications with Socket.io and managed application state using Redux.",
      "Configured client-side routing with React-router-dom for seamless navigation.",
      "Conducted weekly deployments and version control using GitLab."
    ],
    cardIcon: ['fas', 'lightbulb']
  }
];

const fetchProjectDetails = (projectId) => {
  project.value = allProjects.find(p => p.id === projectId);
};

// 2. Use the prop directly from the `props` object
onMounted(() => {
  fetchProjectDetails(props.id);
});

// 3. Watch the prop for changes
watch(() => props.id, (newId) => {
    console.log('ProjectDetail.vue - watched id change:', newId);
  fetchProjectDetails(newId);
});
</script>

<style scoped>
.section {
  padding: 80px 0; /* More padding for detail page */
  background-color: #f8f9fa;
  min-height: calc(100vh - 150px); /* Ensure it takes up screen height */
}

.container {
  max-width: 1100px; /* Slightly narrower for single project details */
  margin: 0 auto;
  padding: 0 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 40px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: color 0.2s ease;
  cursor: pointer;
}

.back-link:hover {
  color: #0056b3;
}

h1 {
  font-size: 2.8em;
  color: #212529;
  margin-bottom: 20px;
  line-height: 1.2;
}

.project-meta {
  font-size: 1.05em;
  color: #6c757d;
  margin-bottom: 10px;
}

.meta-label {
  font-weight: bold;
  color: #343a40;
}

.project-description, .project-contributions {
  margin-top: 40px;
}

.project-description h3, .project-contributions h3 {
  font-size: 1.8em;
  color: #343a40;
  margin-bottom: 20px;
  position: relative;
}

/* Underline for subheadings */
.project-description h3::after, .project-contributions h3::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background-color: #007bff;
  margin-top: 8px;
  border-radius: 1.5px;
}


.project-description p {
  font-size: 1.1em;
  line-height: 1.8;
  color: #343a40;
}

.project-contributions ul {
  list-style: none;
  padding-left: 0;
}

.project-contributions li {
  position: relative;
  padding-left: 28px; /* Space for custom bullet */
  margin-bottom: 12px;
  line-height: 1.7;
  color: #343a40;
  font-size: 1.05em;
}

.project-contributions li::before {
  content: '→'; /* Custom arrow bullet */
  color: #007bff;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.loading-error {
  text-align: center;
  font-size: 1.2em;
  color: #dc3545;
  padding: 50px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .container {
    padding: 30px;
  }
  h1 {
    font-size: 2.2em;
  }
  .project-description h3, .project-contributions h3 {
    font-size: 1.5em;
  }
  .project-description p, .project-contributions li {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 20px;
  }
  h1 {
    font-size: 1.8em;
  }
  .project-description h3, .project-contributions h3 {
    font-size: 1.3em;
  }
  .project-description p, .project-contributions li {
    font-size: 0.95em;
  }
  .project-contributions li::before {
    top: 2px;
  }
}
</style>