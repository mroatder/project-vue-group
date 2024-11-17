<template>
    <section class="new-release bg-dark text-white py-5">
      <div class="container">
        <h2 class="mb-4">New Release Movies</h2>
        <div class="row">
          <div class="col-md-2" v-for="movie in movies" :key="movie.id">
            <div class="card bg-dark text-white border-0">
              <img :src="movie.poster" class="card-img-top" alt="Movie Poster">
              <div class="card-body">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.genre }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
export default {
  name: 'MovieList',
  data() {
    return {
      movies: [
        { id: 1, title: 'EVA', genre: 'Action', poster: require('@/assets/poster1.jpg') },
        { id: 2, title: 'Parkar', genre: 'Adventure', poster: require('@/assets/poster2.jpg') },
        { id: 3, title: 'Tonoy 88', genre: 'Action', poster: require('@/assets/poster3.jpg') },
        { id: 4, title: 'Ackle', genre: 'Adventure', poster: require('@/assets/poster4.jpg') },
      ]
    }
  }
}
</script>

  
  <style scoped>
  .new-release {
    background-color: #121212;
  }
  .card {
    margin-bottom: 20px;
  }
  </style>
  