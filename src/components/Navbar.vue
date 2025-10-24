<template>
  <nav class="navbar">
    <div class="nav-inner">
      <div class="brand">
        <a href="">Narendra<span class="accent">.</span></a>
      </div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
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
.nav-links { display:flex; gap:18px; list-style:none; margin:0; padding:0; }
.nav-links a { color: #dbe7ff; text-decoration:none; font-weight:500; }
.nav-links a:hover { color: #fbcc1e; transform: translateY(-1px); }
@media (max-width: 768px) {
  .nav-links { display:none; }
}
</style>
