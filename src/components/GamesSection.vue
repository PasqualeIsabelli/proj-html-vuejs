<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '../assets/img/protfolio1.png',
          alt: 'protfolio1',
          title: 'Assassin\'s Creed',
        }, {
          image: '../assets/img/protfolio2.png',
          alt: 'protfolio2',
          title: 'Call Of Duty',
        }, {
          image: '../assets/img/protfolio3.png',
          alt: 'protfolio3',
          title: 'Tomb Raider',
        }, {
          image: '../assets/img/protfolio4.png',
          alt: 'protfolio4',
          title: 'Mortal Combat X',
        }
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
          <p class="text-green fw-bold fs-5">Trending Games</p>
          <h2 class="title fw-bold text-white">Choose Who Is The Best In World!</h2>
        </div>
      </div>
      <div class="card-box">
        <div class="mt-4 d-flex justify-content-between gap-3">
          <div class="card border-0 rounded-0" v-for="slide in slides">
            <img :src="getImg(slide.image)" class="card-img-top rounded-0" :alt="slide.alt">
            <div class="card-body d-flex justify-content-between my-2">
              <div>
                <h5 class="card-title text-white">{{ slide.title }}</h5>
                <p class="card-text text-white">Donex sollicitudin malesuada.</p>
              </div>
              <div>
                <button type="button" class="btn btn-success rounded-circle ms-2 mt-3 px-3 py-2 asp-ratio"><i class="fa-solid fa-play fs-4" style="color: #000000;"></i></button>
              </div>
            </div>
            <div class="new py-2 px-3">
              <span class="fw-bold">New</span>
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
  background-color: $color-tertiary;
  background-image: url(../assets/img/protfolio-vector.png);
  position: relative;
  .alpha-container {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
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
        background-color: $color-tertiary;
        position: relative;

        &:hover {
          background-color: $green-primary;
        }
        .new {
          background-color: $green-primary;
          position: absolute;
          top: 0;
          left: 0;
        }
        .btn-success {
          --bs-btn-bg: #05cc7c !important;
          --bs-btn-border-color: #05cc7c !important;
          --bs-btn-hover-bg: #333287 !important;
          --bs-btn-hover-border-color: #333287 !important;
          --bs-btn-color: #000000 !important;
          --bs-btn-hover-color: #05cc7c !important;
        }
        .asp-ratio {
          aspect-ratio: 1/1;
        }
      }
      .btn-box {
        position: absolute;
        top: -70px;
        right: 0;
        .prev, .next {
          padding-top: 12PX;
        }
      }
    }
  }
}
</style>