// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import 'animate.css';
import './styles/global.css';

/* -------------------------------------------------------------------------- */
/*                        START: Font Awesome Imports                         */
/* -------------------------------------------------------------------------- */

// Import the Font Awesome core library
import { library } from '@fortawesome/fontawesome-svg-core';

// Import the Vue Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific BRAND icons (fab) that you use in Skills.vue
// Add more here if you use other brand icons
import {
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
  faDocker,
  faGit,
  faJira,
  faMicrosoft, // Used for Azure Devops
} from '@fortawesome/free-brands-svg-icons';

// Import specific SOLID icons (fas) that you use in Skills.vue
// Add more here if you use other solid icons
import {
  faCode,           // For Typescript
  faLayerGroup,     // For Nuxt
  faGripHorizontal, // For Quasar
  faChartBar,       // For ECharts
  faChartPie,       // For Amcharts
  faServer,         // For Express
  faGlobe,          // For REST APIs
  faDatabase,       // For MySQL
  faUsersRays,      // For Agile Methodologies
  faTerminal,       // You might use this for general programming/CLI
  faArrowLeft,      // left arrrow icon
faEnvelope,
  faPhone,
  faShareAlt,
  faPaperPlane,
  faExternalLinkAlt,
  faDownload,
  faMapMarkerAlt,
  faCalendarAlt,
  faUser,
  faMessage, // Corrected from fa-comment or fa-comments
  faLaptopCode,     // Another option for general dev
  faShieldAlt,
  faChartLine,
  faCubes,
  faUserShield,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the library
library.add(
  faJs, faReact, faVuejs, faNodeJs, faDocker, faGit, faJira, faMicrosoft,
  faCode, faLayerGroup, faGripHorizontal, faChartBar, faChartPie, faServer, faGlobe, faDatabase, faUsersRays,
  faTerminal, faArrowLeft,  faEnvelope,
  faPhone,
  faShareAlt,
  faPaperPlane,
  faExternalLinkAlt,
  faDownload,
  faMapMarkerAlt,
  faCalendarAlt,
  faUser,
  faMessage, // Corrected from fa-comment or fa-comments
  faLaptopCode, // Add any additional solid icons you import
  faShieldAlt,
  faChartLine,
  faCubes,
  faUserShield,
  faLightbulb
);

/* -------------------------------------------------------------------------- */
/*                          END: Font Awesome Imports                         */
/* -------------------------------------------------------------------------- */


const app = createApp(App);

/* Register the FontAwesomeIcon component globally */
// This makes <font-awesome-icon> available in all your Vue components
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');