<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '../assets/img/v-small1.png',
          alt: 'doom',
          title: 'Call Of Duty',
        }, {
          image: '../assets/img/v-small2.png',
          alt: 'akali',
          title: 'Assassins Creed',
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
    <div class="alpha-container">
      <div class="container d-flex">
        <div class="col-6 col-img">
          <img style="width: 100%;" src="../assets/img/v-1.png">
          <div class="over-img d-flex flex-column">
            <div class="m-auto">
              <button type="button" class="btn btn-success rounded-circle px-4 py-3"><i class="fa-solid fa-play"
                  style="color: #ffffff;"></i></button>
            </div>
            <div>
              <p class="text-white fs-4">Call Of Duty</p>
            </div>
          </div>
        </div>
        <div class="col-6 ps-4 section-text">
          <div>
            <p class="text-green fw-bold fs-5">Live Streaming</p>
            <h2 class="text-white title fw-bold">Checkout Our Live Straming</h2>
          </div>
          <div class="container-slider d-flex gap-3 mt-3">
            <div class="card border-0" v-for="slide in slides">
              <img :src="getImg(slide.image)" class="card-img-top" :alt="slide.alt">
              <div class="card-body">
                <h5 class="card-title text-white">{{ slide.title }}</h5>
                <p class="card-text text-white">Vestibulum ac diam sit amet quam cehicula elementum sed sita amet dui.</p>
              </div>
            </div>
            <div class="d-inline-flex gap-3 btn-box">
              <div style="height: 45px; width: 45px;" class="prev rounded-circle bg-white text-center">
                <i class="fa-solid fa-arrow-left fs-5" style="color: #000000;"></i>
              </div>
              <div style="height: 45px; width: 45px;" class="next rounded-circle bg-success text-center">
                <i class="fa-solid fa-arrow-right fs-5" style="color: #ffffff;"></i>
              </div>
            </div>
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
  background-image: url(../assets/img/v-bg.png);
  background-size: cover;
  height: 800px;
  position: relative;

  .alpha-container {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .container {
    height: 100%;
    .col-img {
      position: relative;
      .over-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }
    }
    .btn-success {
      --bs-btn-bg: #00ac4d !important;
      --bs-btn-border-color: #00ac4d !important;
    }
    .col-img, .section-text {
      padding: 200px 0;
      .text-green {
        color: $green-secondary;
      }
      .title {
        font-size: 50px;
      }
    }
    .container-slider {
      position: relative;
      .card {
        background-color: transparent;
      }
      .btn-box {
        position: absolute;
        top: -60px;
        right: 0;
        .prev, .next {
          padding-top: 12px;
        }
      }
    }
  }
}
</style>