<template>
    <section id="testimonials" class="section">
        <div class="container">
            <h2>What People Say</h2>

            <Swiper :modules="modules" :slides-per-view="1" :space-between="20" :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{ clickable: true }" :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }" class="testimonial-swiper">

                <SwiperSlide v-for="(t, i) in testimonials" :key="i">
                    <div class="testimonial-card">
                        <p class="quote">"{{ t.feedback }}"</p>
                        <div class="author">
                            <div class="avatar">{{ getInitials(t.name) }}</div>
                            <div>
                                <h4>{{ t.name }}</h4>
                                <p class="role">{{ t.role }}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay, Navigation } from "swiper/modules"

const modules = [Pagination, Autoplay, Navigation];

const testimonials = [
  {
    name: "Padmini Shilpa K",
    role: "Project Manager, Qentelli",
    feedback:
      "Taking a moment to appreciate Narendra for his exceptional contributions to our front-end projects. His dedication, consistency, and hard work have not only driven our initiatives forward but also inspired the team around him. Thank you for your outstanding efforts, Narendra!",
  },
  {
    name: "Naveen Kumar K",
    role: "Team Lead, Qentelli",
    feedback:
      "Nallabothula Venkata Narendra’s excellence and professionalism have consistently stood out. His brilliance and commitment have played a key role in delivering high-quality outcomes. Thanks for bringing such lasting value to our team and organization.",
  },
  {
    name: "Rajendar G",
    role: "Team Lead, Qentelli",
    feedback:
      "Narendra has been consistently recognized for exceeding expectations and delivering exceptional results. His positive attitude, reliability, and passion for excellence truly make him a standout performer.",
  },
  {
    name: "Kanishka K",
    role: "Senior Software Engineer, Qentelli",
    feedback:
      "Narendra has demonstrated remarkable creativity and problem-solving skills, consistently finding innovative and effective solutions. His technical expertise and collaborative spirit make him a great asset to any team.",
  },
]
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}
</script>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    padding: 40px 0;
}

h2 {
    font-size: 2rem;
    color: #1e1e1e;
    margin-bottom: 1.5rem;
}

h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #007bff;
    /* Primary color for underline */
    margin: 15px auto 0;
    border-radius: 2px;
}

.testimonial-swiper {
    padding-bottom: 40px;
}

.testimonial-card {
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
    padding: 24px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    /* ensures each card fills the same height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.swiper-slide {
    display: flex;
    height: auto;
}
.avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(135deg, #facc15, #fbbf24);
  color: #1e1e1e;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.quote {
    font-style: italic;
    font-size: 1rem;
    color: #333;
    margin-bottom: 14px;
    line-height: 1.6;
}

.author {
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 2px solid #facc15;
}

.role {
    font-size: 0.85rem;
    color: #777;
}

.swiper-pagination-bullet {
    background: #facc15 !important;
}

.swiper-pagination-bullet-active {
    background: #fbbf24 !important;
}
</style>
