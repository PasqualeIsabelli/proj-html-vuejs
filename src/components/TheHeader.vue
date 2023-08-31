<script>
import TheNavbar from './TheNavbar.vue';

export default {
  components: {
    TheNavbar
  },
  data() {
    return {}
  }
}
</script>



<template>
  <header>
    <nav>
      <TheNavbar></TheNavbar>
    </nav>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/img/banner1.png" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/img/bg1.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/img/bg2.png" alt="Third slide">
        </div>
      </div>
    </div>
    <div class="jumbo-text col-6">
      <h4 class="text-center subtitle fw-bold">WELCOME TO RAXG</h4>
      <h1 class="text-white text-center title fw-bold">ARE YOU READY FOR YOUR NEXT CHALLENGE?</h1>
      <div class="text-center">
        <button type="button" class="btn btn-success me-2 mt-3 px-4 py-3">Read More →</button>
        <button type="button" class="btn btn-success rounded-circle ms-2 mt-3 px-3 py-2 asp-ratio"><i class="fa-solid fa-play fs-4" style="color: #000000;"></i></button>
      </div>
    </div>
    <div class="jumbo-item d-flex flex-column gap-4">
      <a href="#0">
        <div class="social rounded-circle text-center px-2 py-1">
          <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
        </div>
      </a>
      <a href="#0">
        <div class="social rounded-circle text-center px-2 py-1">
          <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
        </div>
      </a>
      <a href="#0">  
        <div class="social rounded-circle text-center px-2 py-1">
          <i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>
        </div>
      </a>
      <a href="#0">
        <div class="social rounded-circle text-center px-2 py-1">
          <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
        </div>
      </a>
    </div>
  </header>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

header {
  position: relative;
  overflow: hidden;
  
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .jumbo-text {
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .asp-ratio {
      aspect-ratio: 1/1;
    }
    .subtitle {
      color: $green-secondary;
    }
    .title {
      font-size: 70px;
    }
  }
  .jumbo-item {
    position: absolute;
    top: 50%;
    left: 150px;
    transform: translate(0, -50%);

    .social {
      background-color: $color-secondary;
      aspect-ratio: 1/1;
      
      &:hover {
      background-color: $green-secondary;
      }
    }
  }
  .btn-success {
    --bs-btn-bg: #05cc7c !important;
    --bs-btn-border-color: #05cc7c !important;
    --bs-btn-hover-bg: transparent !important;
    --bs-btn-hover-border-color: #05cc7c !important;
  }
}
</style>
