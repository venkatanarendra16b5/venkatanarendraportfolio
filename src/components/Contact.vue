<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title animate__animated animate__fadeInUp">Get In Touch</h2>
      <p class="section-description animate__animated animate__fadeInUp animate__delay-0-2s">
        I'm always open to new opportunities, collaborations, and conversations.
        Whether you have a project in mind, a question, or just want to connect,
        feel free to reach out. I'm available for full-time roles, contract work, and consulting.
      </p>

      <div class="contact-grid">
        <!-- Existing Contact Info Boxes -->
        <div class="contact-card animate__animated animate__fadeInUp animate__delay-0-4s">
          <font-awesome-icon :icon="['fas', 'envelope']" class="card-icon" />
          <h3>Email</h3>
          <p><a href="mailto:venkatanarendra16b5@gmail.com" class="contact-link">venkatanarendra16b5@gmail.com</a></p>
        </div>

        <div class="contact-card animate__animated animate__fadeInUp animate__delay-0-6s">
          <font-awesome-icon :icon="['fas', 'phone']" class="card-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+916300645011" class="contact-link">+91 6300645011</a></p>
        </div>

        <div class="contact-card animate__animated animate__fadeInUp animate__delay-0-8s">
          <font-awesome-icon :icon="['fas', 'share-alt']" class="card-icon" />
          <h3>Online Profiles</h3>
          <p>
            <a href="https://www.linkedin.com/in/nallabothula-venkata-narendra-a86b8b1a2/" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>
            <span class="separator">·</span>
            <a href="https://github.com/venkatanarendra16b5" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub</a>
          </p>
        </div>

        <!-- NEW: Download Resume Card -->
        <div class="contact-card animate__animated animate__fadeInUp animate__delay-1s">
          <font-awesome-icon :icon="['fas', 'download']" class="card-icon" />
          <h3>Resume</h3>
          <p>
            <a href="/resume.pdf" download class="contact-link button-link">
              <font-awesome-icon :icon="['fas', 'download']" /> Download
            </a>
          </p>
        </div>

        <!-- NEW: Location/Availability (Optional) -->
        <div class="contact-card animate__animated animate__fadeInUp animate__delay-1-2s">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="card-icon" />
          <h3>Location & Availability</h3>
          <p>Currently based in Hyderabad, India (IST).</p>
          <p>Open to remote opportunities worldwide.</p>
        </div>

        <!-- NEW: Schedule a Call (Optional) -->
        <div class="contact-card animate__animated animate__fadeInUp animate__delay-1-4s">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="card-icon" />
          <h3>Schedule a Call</h3>
          <p>Book a convenient time to discuss your needs.</p>
          <a href="https://calendly.com/venkatanarendra16b5" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            Book Now <font-awesome-icon :icon="['fas', 'external-link-alt']" class="btn-icon" />
          </a>
        </div>
      </div>
    </div>

    <!-- New: Contact Form Section -->
    <!-- <div class="contact-form-section animate__animated animate__fadeInUp animate__delay-1-6s">
      <div class="container">
        <h3 class="form-title">Send a Message</h3>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <div class="input-wrapper">
              <font-awesome-icon :icon="['fas', 'user']" class="input-icon" />
              <input type="text" id="name" v-model="form.name" required placeholder="John Doe">
            </div>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <div class="input-wrapper">
              <font-awesome-icon :icon="['fas', 'envelope']" class="input-icon" />
              <input type="email" id="email" v-model="form.email" required placeholder="your.email@example.com">
            </div>
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <div class="input-wrapper">
              <font-awesome-icon :icon="['fas', 'message']" class="input-icon" />
              <textarea id="message" v-model="form.message" rows="5" required placeholder="I'm interested in..."></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Send Message <font-awesome-icon :icon="['fas', 'paper-plane']" class="btn-icon" />
          </button>
        </form>
      </div>
    </div> -->
  </section>
</template>
<script setup>
import { ref } from 'vue';

// Reactive form data
const form = ref({
  name: '',
  email: '',
  message: '',
});

// Function to handle form submission
const submitForm = async () => {
  // In a real application, you would send this data to a backend server
  // using fetch, axios, or a service like Formspree, Netlify Forms, etc.

  // Example: Log form data to console
  console.log('Form Submitted:', form.value);

  // You can also add client-side validation here before sending

  // Simulate an API call
  try {
    // Replace this with your actual form submission logic
    // For example, using Formspree:
    // const response = await fetch('https://formspree.io/f/your-form-id', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(form.value),
    // });

    // if (response.ok) {
    //   alert('Message sent successfully!');
    //   // Clear the form
    //   form.value = { name: '', email: '', message: '' };
    // } else {
    //   alert('Failed to send message. Please try again.');
    // }

    // For now, just show an alert and clear the form
    alert('Message sent successfully (simulated)!');
    form.value = { name: '', email: '', message: '' };

  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again later.');
  }
};
</script>
<style scoped>
/* General Section Styling */
.contact-section {
  padding: 80px 0px 0px 0px;
  background-color: #f8faff; /* Light background for the section */
  font-family: 'Inter', sans-serif; /* Example font */
  color: #333;
  overflow: hidden; /* To handle animations */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3.2em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
}
h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #007bff; /* Primary color for underline */
  margin: 15px auto 0;
  border-radius: 2px;
}
.section-description {
  font-size: 1.15em;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px auto;
  line-height: 1.7;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.contact-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 2.5em;
  color: #007bff; /* Primary brand color */
  margin-bottom: 15px;
}

.contact-card h3 {
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 600;
}

.contact-card p {
  font-size: 1em;
  color: #666;
  line-height: 1.6;
}

.contact-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.separator {
  margin: 0 5px;
  color: #aaa;
}

/* Buttons Styling */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.4);
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
  box-shadow: 0 4px 10px rgba(108, 117, 125, 0.3);
}

.btn-secondary:hover {
  background-color: #5a6268;
  box-shadow: 0 6px 15px rgba(108, 117, 125, 0.4);
}

.btn-icon {
  margin-left: 10px;
  font-size: 0.9em;
}

/* Contact Form Section */
.contact-form-section {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  padding: 50px 40px;
  max-width: 800px;
  margin: 0 auto;
}

.form-title {
  font-size: 2.2em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
}

.contact-form .form-group {
  margin-bottom: 25px;
}

.contact-form label {
  display: block;
  font-size: 1.05em;
  color: #444;
  margin-bottom: 8px;
  font-weight: 500;
}

.contact-form .input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.contact-form .input-icon {
  position: absolute;
  left: 15px;
  color: #aaa;
  font-size: 1.1em;
  pointer-events: none; /* Make sure icon doesn't block clicks */
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  width: 100%;
  padding: 14px 15px 14px 45px; /* Adjust padding for icon */
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  color: #333;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: #fefefe;
}

.contact-form textarea {
  resize: vertical; /* Allow vertical resizing */
  min-height: 120px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  outline: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #bbb;
}

.contact-form button[type="submit"] {
  width: auto;
  margin-top: 20px;
  font-size: 1.1em;
  padding: 14px 30px;
}

/* Animate.css Custom Delays (if you need more precise control) */
/* The existing classes like animate__delay-0-2s are built-in */

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2.8em;
  }
  .section-description {
    font-size: 1.05em;
  }
  .contact-grid {
    gap: 25px;
  }
  .contact-card {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 15px;
  }
  .section-title {
    font-size: 2.4em;
  }
  .section-description {
    margin-bottom: 40px;
  }
  .contact-grid {
    grid-template-columns: 1fr; /* Stack cards on small screens */
    gap: 20px;
  }
  .contact-card {
    max-width: 350px; /* Set a specific max-width for uniformity on mobile */
    min-width: 350px; /* Ensure they don't get too small */
    margin: 0 auto; /* Center the cards when stacked */
  }
  .contact-form-section {
    padding: 30px 20px;
  }
  .form-title {
    font-size: 1.8em;
    margin-bottom: 30px;
  }
  .contact-form input,
  .contact-form textarea {
    padding-left: 40px; /* Adjust for smaller icon/input */
  }
  .contact-form .input-icon {
    left: 12px;
  }
  .contact-form button[type="submit"] {
    width: 100%; /* Full width button on small screens */
    padding: 12px 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2em;
  }
  .section-description {
    font-size: 0.95em;
  }
  .card-icon {
    font-size: 2em;
  }
  .contact-card h3 {
    font-size: 1.3em;
  }
}
</style>