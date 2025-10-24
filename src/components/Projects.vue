<template>
  <section id="projects" class="section">
    <div class="container" v-if="!showProjectInfo">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-icon-wrapper">
            <font-awesome-icon :icon="project.cardIcon || ['fas', 'file-lines']" class="project-card-icon" />
          </div>
          <h3>{{ project.title }}</h3>
          <p class="project-tagline">{{ project.tagline }}</p>
          <p class="project-tech">
            <span class="tech-label">Tech:</span> {{ project.environment.join(', ') }}
          </p>
          <div class="view-details-link" @click="selectedProjectId = project.id,showProjectInfo = true">View Details <span class="arrow">→</span></div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <ProjectDetail :id="selectedProjectId" @back="showProjectInfo=false"/>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectDetail from './ProjectDetail.vue';
//import { useRouter } from 'vue-router'
// In a real app, this data might come from an API or a separate data file
const showProjectInfo = ref(false);
const selectedProjectId = ref(null);
const projects = [
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
    cardIcon: ['fas', 'shield-alt'] // Example icon for insurance, ensure it's imported in main.js
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
    cardIcon: ['fas', 'chart-line'] // Example icon for dashboard/analytics
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
    cardIcon: ['fas', 'cubes'] // Icon for microservices
  },
  {
    id: 'qadmin',
    title: 'QADMIN',
    tagline: 'Admin panel for Qentelli SaaS products, managing user licenses',
    client: 'Qentelli', // Assuming Qentelli is the client for internal products
    environment: ['Vue.js (Vue2)', 'Vuex', 'Vuetify', 'Node.js', 'MySQL'],
    description: `Designed and developed an admin application which is a common one for all Qentelli SaaS products. Maintained all the user license's details and license upgradation of individual user.`,
    contributions: [
      "Developed and maintained a dynamic admin panel using Vue.js and Vuetify, providing a seamless user interface for managing platform operations.",
      "Integrated state management with Vuex, ensuring efficient handling of application data and enhancing performance across the admin panel.",
      "Designed and implemented RESTful APIs using Node.js, facilitating secure and scalable communication between the frontend and backend services.",
      "Built and optimized MySQL databases, creating efficient schema designs and queries to handle large datasets for reporting and analytics."
    ],
    cardIcon: ['fas', 'user-shield'] // Icon for admin panel
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
    cardIcon: ['fas', 'lightbulb'] // Icon for ideas
  }
];

// If you need to make projects reactive or filter them, you can use ref
// const displayedProjects = ref(projects);

// If you want to programmatically navigate (e.g., via a button click)
// const router = useRouter();
// const goToProject = (projectId) => {
//   router.push({ name: 'ProjectDetail', params: { projectId } });
// };
</script>

<style scoped>
.section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  text-align: center;
  font-size: 2.8em;
  color: #212529;
  margin-bottom: 50px;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #007bff;
  margin: 15px auto 0;
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.project-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none; /* Remove underline from router-link */
  color: inherit; /* Inherit text color */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #e0e0e0;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.project-icon-wrapper {
  text-align: center;
  margin-bottom: 15px;
}

.project-card-icon {
  font-size: 3em;
  color: #007bff; /* Primary icon color */
}

.project-card h3 {
  font-size: 1.6em;
  color: #343a40;
  margin-bottom: 10px;
  line-height: 1.3;
}

.project-tagline {
  font-size: 0.95em;
  color: #6c757d;
  margin-bottom: 15px;
  flex-grow: 1; /* Allows it to take up available space */
}

.project-tech {
  font-size: 0.85em;
  color: #495057;
  margin-top: auto; /* Pushes to bottom */
}

.project-tech .tech-label {
  font-weight: bold;
  color: #212529;
  margin-right: 5px;
}

.view-details-link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #007bff;
  font-weight: 600;
  margin-top: 15px;
  transition: color 0.2s ease;
  cursor: pointer;
}

.project-card:hover .view-details-link {
  color: #0056b3;
}

.view-details-link .arrow {
  font-size: 1.2em;
  transition: transform 0.2s ease;
}

.project-card:hover .view-details-link .arrow {
  transform: translateX(5px);
}


/* Responsive Adjustments */
@media (max-width: 768px) {
  h2 {
    font-size: 2.2em;
    margin-bottom: 40px;
  }
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  .project-card {
    padding: 20px;
  }
  .project-card h3 {
    font-size: 1.4em;
  }
  .project-tagline {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
  }
  .projects-grid {
    grid-template-columns: 1fr; /* Stack cards vertically */
    gap: 15px;
  }
  .project-card {
    padding: 18px;
  }
  .project-card h3 {
    font-size: 1.2em;
  }
  .project-card-icon {
    font-size: 2.5em;
  }
}
</style>