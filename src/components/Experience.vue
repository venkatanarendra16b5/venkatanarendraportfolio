<template>
  <section id="experience" class="section">
    <div class="container">
      <h2>Professional Experience</h2>

      <!-- Experience Entry 1: Software Engineer at Qentelli Solutions -->
      <div class="experience-card">
        <h3>Software Engineer <span class="company"> – Qentelli Solutions Pvt Ltd</span></h3>
        <p class="dates">Nov 2021 – Present</p>
        <p class="location">Hyderabad, India</p> <!-- Optional: Add location for context -->
        <p class="tech-stack">
          <span class="tech-label">Technologies:</span> Vue.js, Quasar, Node.js, Express.js, MySQL, Azure DevOps, Redis, Pinia, Vuex, React.js, Socket.io, Vite, Redux
        </p>
        <ul class="contributions-list">
          <li>
            <span class="tech-label">Full-Stack Development & Microservices:</span> Engineered and deployed dynamic web applications and scalable microservices, specializing in <span class="skill-label">Node.js/Express.js</span> for robust backend logic and <span class="skill-label">Vue.js/React.js/TypeScript</span> for interactive front-end interfaces. Integrated with over 30 tools (Jira, GitLab, Bitbucket, ADO, SonarQube) for streamlined data collection.
          </li>
          <li>
            <span class="tech-label">Performance Optimization:</span> Significantly optimized application performance, including a <span class="skill-label">30% reduction in build times</span> with Vite, implementing <span class="skill-label">API response caching with Redis</span>, and enhancing overall productivity.
          </li>
          <li>
            <span class="tech-label">Database & Data Management:</span> Designed, optimized, and integrated <span class="skill-label">SQL Server, MySQL, and MongoDB</span> for secure data integrity. Developed intuitive data visualization dashboards and efficient schema designs for large datasets.
          </li>
          <li>
            <span class="tech-label">DevOps & CI/CD:</span> Established and maintained robust CI/CD pipelines using <span class="skill-label">Azure DevOps</span> and <span class="skill-label">GitLab CI</span> for automated builds, testing, and deployments, including artifact management and version control with Git.
          </li>
          <li>
            <span class="tech-label">Cloud & Real-time Communication:</span> Implemented AWS S3 for secure file storage and integrated <span class="skill-label">Socket.io</span> for real-time, bidirectional communication in various applications.
          </li>
          <li>
            <span class="tech-label">UI/UX & State Management:</span> Crafted responsive user interfaces, employing modern <span class="skill-label">React.js (hooks)</span> and <span class="skill-label">Vue.js</span> features, and managing application state effectively with <span class="skill-label">Pinia, Vuex, and Redux</span>. Implemented SEO and SSR for improved visibility.
          </li>
          <li>
            <span class="tech-label">Project & Product Lifecycle Management:</span> Managed full project lifecycles, from architecture design and requirement gathering to deployment and support. Actively participated in code reviews, developed mitigation strategies, and collaborated with stakeholders.
          </li>
        </ul>
        <!-- You can also add a "Highlights" section here if you want to pull out specific achievements -->
      </div>

      <!-- You can add more experience entries if you have previous significant roles that are relevant -->
      <!-- Example structure for a past role -->
      <!--
      <div class="experience-card">
        <h3>Previous Role Title <span class="company"> – Previous Company Name</span></h3>
        <p class="dates">Start Date – End Date</p>
        <p class="location">Location</p>
        <p class="tech-stack">
          <span class="tech-label">Technologies:</span> [List of Technologies]
        </p>
        <ul class="contributions-list">
          <li>Key contribution 1 with impact.</li>
          <li>Key contribution 2 with technologies used.</li>
        </ul>
      </div>
      -->

      <!-- If you want to include "Rewards & Recognition" here as a separate section -->
      <div class="experience-card recognition">
        <h3>Awards & Recognition</h3>
        <ul class="contributions-list">
          <li>
            Recognized as a <span class="skill-label">Team Player</span> for consistently contributing to multiple products and playing a pivotal role in achieving significant project success through hard work and collaboration.
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
// No script changes needed for this content, but keep your existing setup if any
// import { ref, onMounted } from 'vue' // Example if you had animations
</script>

<style scoped>
.section {
  padding: 60px 0;
  background-color: #f8f9fa; /* Light background for section */
}

.container {
  max-width: 1100px; /* Slightly narrower for readability */
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

/* Optional: Underline effect for the heading */
h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #007bff; /* Primary color for underline */
  margin: 15px auto 0;
  border-radius: 2px;
}

.experience-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* More prominent shadow */
  padding: 35px;
  margin-bottom: 40px;
  border-left: 5px solid #007bff; /* Accent border */
}

.experience-card h3 {
  font-size: 1.8em;
  color: #343a40;
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap; /* Allow company name to wrap if too long */
  align-items: baseline;
}

.experience-card h3 .company {
  font-weight: normal;
  color: #5a6170;
  margin-left: 8px; /* Space between title and company */
}

.experience-card .dates {
  font-size: 1em;
  color: #6c757d;
  margin-bottom: 15px;
  font-weight: 500;
}

.experience-card .location {
  font-size: 0.95em;
  color: #6c757d;
  margin-bottom: 15px;
  font-style: italic;
}

.tech-stack {
  font-size: 0.95em;
  color: #495057;
  margin-bottom: 25px;
  line-height: 1.6;
}

.tech-label {
  font-weight: bold;
  color: #212529;
  margin-right: 5px;
}
.skill-label {
  font-weight: bold;
  color: #42b098;
  margin-right: 5px;
}

.contributions-list {
  list-style: none; /* Remove default bullet */
  padding-left: 0;
  margin-top: 20px;
}

.contributions-list li {
  position: relative;
  padding-left: 25px; /* Space for custom bullet */
  margin-bottom: 15px;
  line-height: 1.7;
  color: #343a40;
  font-size: 1.05em;
}

.contributions-list li::before {
  content: '✓'; /* Custom checkmark bullet */
  color: #007bff; /* Primary color for checkmark */
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.contributions-list li strong {
  color: #212529; /* Make bolded tech names stand out */
}

.experience-card.recognition {
  border-left: 5px solid #28a745; /* Green accent for recognition */
}
.experience-card.recognition h3 {
  color: #28a745;
}


/* Responsive Adjustments */
@media (max-width: 768px) {
  h2 {
    font-size: 2.2em;
    margin-bottom: 40px;
  }
  .experience-card {
    padding: 25px;
    margin-bottom: 30px;
  }
  .experience-card h3 {
    font-size: 1.5em;
  }
  .contributions-list li {
    font-size: 1em;
    padding-left: 20px;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
  }
  .experience-card {
    padding: 20px;
    margin-bottom: 25px;
  }
  .experience-card h3 {
    font-size: 1.3em;
  }
  .experience-card h3 .company {
    margin-left: 0; /* Remove margin on small screens if wraps */
    display: block; /* Force company name to new line */
  }
  .dates, .location, .tech-stack {
    font-size: 0.9em;
  }
  .contributions-list li {
    font-size: 0.95em;
    padding-left: 18px;
  }
  .contributions-list li::before {
    top: 2px; /* Adjust custom bullet position */
  }
}
</style>