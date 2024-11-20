<template>
  <div class="container-fluid p-0">
    <!-- Video as Banner -->
    <video autoplay muted loop class="w-100">
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  <!-- Content for the banner, e.g., Movie Title, Buttons -->
    <div class="banner-content text-center text-white">
      <h1 class="display-4">Movie Title</h1>
      <p class="lead">Subtitle or description of the movie.</p>
      <a href="#" class="btn btn-primary">Watch Now</a>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      videoSource: require('@/assets/Venom2.mp4'), // อ้างอิงไฟล์วิดีโออย่างถูกต้อง
    };
  },
};
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
.w-100 {
  width: 100%;
  height: auto;
}
</style>
  