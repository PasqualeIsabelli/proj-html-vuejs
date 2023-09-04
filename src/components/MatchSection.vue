<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '../assets/img/m1.png',
          alt: 'ninja',
          name: 'Ninja Warrior Gaming'
        }, {
          image: '../assets/img/m2.png',
          alt: 'witch',
          name: 'Witch Gaming'
        }, {
          image: '../assets/img/m3.png',
          alt: 'skullg',
          name: 'SkullG Gaming'
        },
      ]
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
    <div class="alpha-container"></div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p class="text-green fw-bold fs-5">Upcoming Match</p>
          <h2 class="title fw-bold text-white">Keep Eyes & Manage upcoming Battle</h2>
        </div>
      </div>
      <div class="card-box mt-5 d-flex justify-content-between">
        <div class="card rounded-4 p-4" v-for="slide in slides">
          <img :src="getImg(slide.image)" class="card-img-top rounded-4" :alt="slide.alt">
          <div class="card-body pt-5">
            <h2 class="card-title text-center text-white fw-bold">{{ slide.name }}</h2>
            <div class="d-flex justify-content-center gap-2 pt-2">
              <div style="height: 45px; width: 45px;" class="icon rounded-circle text-center">
                <i class="fa-brands fa-youtube"></i>
              </div>
              <div style="height: 45px; width: 45px;" class="icon rounded-circle text-center">
                <i class="fa-solid fa-message"></i>
              </div>
            </div>
            <h2 class="card-title text-center text-white fw-bold fs-1 pt-2">9.45</h2>
            <p class="card-text text-center text-white fw-bold">1st November,2022</p>
            <div class="d-flex justify-content-center pt-3">
              <a href="#" class="btn btn-success fw-bold px-5 py-3">View More</a>
            </div>
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
  </section>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


section {
  background-image: url(../assets/img/v-bg.png);
  background-size: cover;
  height: 1200px;
  position: relative;

  .alpha-container {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .container {
    position: relative;
    padding: 100px 0;
    .text-green {
      color: $green-secondary;
    }
    .title {
      font-size: 50px;
    }
    .card-box {
      position: relative;
      .card {
        background-color: $color-secondary;
        width: calc(100% / 3 - 1rem);
        .card-img-top {
          background-color: $color-primary;
          aspect-ratio: 1/1;
          height: 50%;
          padding: 2rem 5rem;
        }
        .icon {
          background-color: $green-secondary;
          padding-top: 12px;
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
      .btn-box {
        position: absolute;
        top: -100px;
        right: 0;
        .prev, .next {
          padding-top: 12px;
        }
      }
    }
  }
}
</style>