<template>
  <div id="app" class="bg-dark text-white">
    <Header />
    <HeroSection />
    <MovieList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import MovieList from './components/MovieList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    MovieList,
    Footer
  }
}
</script>

<style>
body {
  background-color: #121212;
}
</style>
