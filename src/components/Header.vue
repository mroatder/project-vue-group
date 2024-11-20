<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="mr-4 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <span class="francois-one-regular fs-4 fw-bold">MOVEFLIX</span>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Movies</a></li>
          <li><a href="#" class="nav-link px-2 text-white">TV Showss</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
        </ul>
      
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <i class="fas fa-search search-icon"></i>
          <input type="search" class="form-control form-control-dark text-bg-purple" placeholder="Search..." aria-label="Search">
          
        </form>

        <div class="text-end">
          <a href="#"><button type="button" class="btn btn-outline-dark me-2">SIGN IN</button></a>
          <a href="#"><button type="button" class="btn btn-outline-dark">SIGN UP</button></a>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script>
  export default {
    name: 'Header'
    
  }
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');
  .navbar {
    margin-bottom: 30px;
  }
  .btn{
    background-color: rgb(182, 145, 255);
    font-weight: bold;
  }
  .search-container {
    position: relative;
}

.francois-one-regular {
  font-family: "Francois One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
  .search-input {
    height: 50px;
    border-radius: 30px;
    padding-left: 35px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #ffffff;
  } 
</style>
  