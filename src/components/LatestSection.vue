<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '../assets/img/b1.png',
          alt: 'ninja',
          title: 'Ninja Warrior Gaming',
        }, {
          image: '../assets/img/b2.png',
          alt: 'ghost',
          title: 'Ghost Rider Returns',
        }, {
          image: '../assets/img/b3.png',
          alt: 'cod',
          title: 'Call Of Duty 4',
        }, {
          image: '../assets/img/b4.png',
          alt: 'mtx',
          title: 'Mortal Combat X',
        }
      ],
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
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p class="text-green fw-bold fs-5">Latest News</p>
          <h2 class="title fw-bold text-white">Stay Updated With our Latest News Articles</h2>
        </div>
      </div>
      <div class="card-box mt-4">
        <div class="d-flex gap-4">
          <div class="card pb-3" v-for="slide in slides">
            <img :src="getImg(slide.image)" class="card-img-top" :alt="slide.alt">
            <div class="card-body d-flex flex-column">
              <a href="#0" class="text-decoration-none"><h5 class="card-title text-white text-center fw-bold fs-4 mt-2">{{ slide.title }}</h5></a>
              <br>
              <p class="card-text text-white text-center"><i class="fa-brands fa-youtube" style="color: #00ac4d;"></i> By Admin <span class="text-green">|</span> <i class="fa-solid fa-calendar-days" style="color: #00ac4d;"></i> Oct 25, 2022</p>
              <br>
              <a href="#0" class="btn btn-success fw-bold py-3 px-4">Read More &#8594;</a>
            </div>
          </div>
        </div>
        <div class="d-inline-flex gap-3 btn-box pippo">
          <div style="height: 45px; width: 45px;" class="prev rounded-circle bg-white text-center">
            <i class="fa-solid fa-arrow-left fs-5" style="color: #000000;"></i>
          </div>
          <div style="height: 45px; width: 45px;" class="next rounded-circle bg-success text-center">
            <i class="fa-solid fa-arrow-right fs-5" style="color: #ffffff;"></i>
          </div>
        </div>
      </div>
      <div class="letter-box col-12 rounded-3">
        <div class="row">
          <div class="col-6">
            <h2 class="title fw-bold text-white">Our news Letter</h2>
          </div>
          <div class="col-6 mail-box rounded-5 d-flex justify-content-between align-items-center">
            <p class="text-secondary text"><i class="fa-solid fa-message" style="color: #00ac4d;"></i> Enter Your Email</p>
            <button type="button" class="btn btn-primary rounded-5 fw-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

section {
  background-color: $color-primary;
  .container{
    position: relative;
    padding: 100px 0 200px 0;
    .text-green {
      color: $green-secondary;
    }
    .title {
      font-size: 50px;
    }
    .card-box {
      position: relative;
      .btn-box {
        position: absolute;
        top: -70px;
        right: 20px;
        .prev, .next {
          padding-top: 12px;
        }
      }
    }
    .card {
      background-color: $color-secondary;
      .btn-success {
        --bs-btn-bg: #05cc7c !important;
        --bs-btn-border-color: #05cc7c !important;
        --bs-btn-hover-bg: transparent !important;
        --bs-btn-hover-border-color: #05cc7c !important;
        --bs-btn-color: #000000 !important;
        --bs-btn-hover-color: #05cc7c !important;
        margin: 0 auto;
      }
    }
    .letter-box{
      background-color: $color-secondary;
      position: absolute;
      bottom: -90px;
      padding: 60px 40px;
      z-index: 25;
      .mail-box {
        background-color: $color-primary;
        .text {
          margin: 0 0 0 10px;
        }
        .btn-primary {
          --bs-btn-bg: #00ac4d !important;
          --bs-btn-border-color: #00ac4d !important;
          --bs-btn-hover-bg: #00ac4d !important;
          --bs-btn-hover-border-color: #00ac4d !important;
          --bs-btn-color: #000000 !important;
          --bs-btn-hover-color: #000000 !important;
          height: 40px;
        }
      }
    }
  }
}
</style>