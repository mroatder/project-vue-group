<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="mr-4 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <span class="fs-4 ">MOVEFLIX</span>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Movies</a></li>
          <li><a href="#" class="nav-link px-2 text-white">TV Showss</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-purple" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <a href="#"><button type="button" class="btn btn-outline-dark me-2">SIGN IN</button></a>
          <a href="#"><button type="button" class="btn btn-outline-dark">SIGN UP</button></a>
        </div>
      </div>
    </div>
  </header>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Movflix</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Movies</a></li>
          <li class="nav-item"><a class="nav-link" href="#">TV Shows</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          <li class="nav-item"><a class="btn btn-primary ms-3" href="#">Sign In</a></li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>
  
<script>
  export default {
    name: 'Header'
  }
</script>
  
<style scoped>
  .navbar {
    margin-bottom: 30px;
  }
  .btn{
    background-color: mediumpurple;
  }
</style>
  