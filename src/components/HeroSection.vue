<template>
  <div class="container-fluid p-0">
    <!-- Video as Banner -->
    <video autoplay muted loop class="w-100">
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  <!-- Content for the banner, e.g., Movie Title, Buttons -->
    <div class="banner-content text-center text-white">
      <h1 class="francois-one-regular display-4">Venom: Let There Be Carnage</h1>
      <p class="lato-font lead">October, 2021</p>
      <a href="#" class="btn btn-light">Watch Now</a>
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
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');
.francois-one-regular {
  font-family: "Francois One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.lato-font {
    font-family: 'Lato', sans-serif;
    font-weight: 300; /* ใช้ 300 สำหรับฟอนต์บาง */
  }
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
.btn{
    background-color: rgb(182, 145, 255);
    font-weight: bold;
    border: rgb(182, 145, 255);
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
  