<template>
  <div class="container-fluid p-0">
  <!-- Video as Banner -->
  <video autoplay muted loop class="w-100">
    <source src="/..src/assets/venom.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <!-- Content for the banner, e.g., Movie Title, Buttons -->
  <div class="banner-content text-center text-white">
    <h1 class="display-4">Movie Title</h1>
    <p class="lead">Subtitle or description of the movie.</p>
    <a href="#" class="btn btn-primary">Watch Now</a>
  </div>
</div>

  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container-fluid p-0">
  <!-- YouTube Video as Banner -->
  <div class="embed-responsive embed-responsive-16by9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/nlsAju9g4cI?si=LCX76pzOJ99BbKGM&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  
  <!-- Content for the banner, e.g., Movie Title, Buttons -->
    <div class="banner-content text-center text-white">
      <h1 class="display-4">Movie Title</h1>
      <p class="lead">Subtitle or description of the movie.</p>
      <a href="#" class="btn btn-primary">Watch Now</a>
    </div>
  </div>

  
  <!-- Content for the banner, e.g., Movie Title, Buttons -->
    <div class="banner-content text-center text-white">
      <h1 class="display-4">Movie Title</h1>
      <p class="lead">Subtitle or description of the movie.</p>
      <a href="#" class="btn btn-primary">Watch Now</a>
    </div>



    <!-- <section class="hero-section text-white bg-dark">
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
    </section> -->

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
  .banner {
  position: relative;
  overflow: hidden;
}

.embed-responsive {
  position: relative;
  height: 100%;
  width: 100%;
}

.embed-responsive-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.embed-responsive {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.embed-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
}
</style>
  