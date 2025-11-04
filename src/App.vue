<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <TestimonialsSection/>
      <Contact />
    </main>
    <footer class="footer">
      © {{ new Date().getFullYear() }} N. Venkata Narendra — Built with ❤️
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
</script>

<style>
.footer {
  text-align: center;
  padding: 24px 12px;
  color: #5a6170;
  background: #fff;
  margin-top: 40px;
}
main { margin-top: 80px; }
</style>
