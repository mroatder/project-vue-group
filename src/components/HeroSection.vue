<template>
    <section class="hero-section text-white bg-dark">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-4">Unlimited Movie, TV Shows, & More.</h1>
            <p class="lead">Romance, Drama | 2023 | 120 mins</p>
            <button class="btn btn-primary btn-lg">Watch Now</button>
          </div>
          <div class="col-md-6">
            <img src="..\assets\1595844471591.jpg" class="img-fluid rounded" alt="Hero Image">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
  .hero-section {
    background-image: url('@/assets/1595844471591.jpg');
    background-size: cover;
    background-position: center;
    padding: 80px 0;
  }
  </style>
  