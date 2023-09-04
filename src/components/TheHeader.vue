<script>
import TheNavbar from './TheNavbar.vue';

export default {
  components: {
    TheNavbar
  },
  data() {
    return {
      socialItems: ['fa-brands fa-facebook', 'fa-brands fa-twitter', 'fa-brands fa-linkedin', 'fa-brands fa-instagram'],
      jumboSlides: ['../assets/img/banner1.png', '../assets/img/bg1.png', '../assets/img/bg2.png',]
    }
  },
  methods: {
    getImg(img) {
      return new URL(img, import.meta.url).href
    },
  }
}
</script>



<template>
  <header>
    <nav>
      <TheNavbar></TheNavbar>
    </nav>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="jumboSlide in jumboSlides">
          <img class="d-block w-100" :src="getImg(jumboSlide)">
        </div>
      </div>
    </div>
    <div class="jumbo-text col-6">
      <h4 class="text-center subtitle fw-bold">WELCOME TO RAXG</h4>
      <h1 class="text-white text-center title fw-bold">ARE YOU READY FOR YOUR NEXT CHALLENGE?</h1>
      <div class="text-center">
        <button type="button" class="btn btn-success me-2 mt-3 px-4 py-3 fw-bold">Read More &#8594;</button>
        <button type="button" class="btn btn-success rounded-circle ms-2 mt-3 px-3 py-2 asp-ratio"><i
            class="fa-solid fa-play fs-4" style="color: #000000;"></i></button>
      </div>
    </div>
    <div class="jumbo-item">
      <ul>
        <li class="d-flex flex-column gap-4">
          <a href="#0" class="social" v-for="social in socialItems">
            <i :class="social" style="color: #ffffff;"></i>
          </a>
        </li>
      </ul>
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
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      background-color: $color-secondary;
      text-align: center;
      transition: all 0.3s;

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
    --bs-btn-color: #000000 !important;
    --bs-btn-hover-color: #05cc7c !important;
  }
}
</style>