<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '../assets/img/s1.png',
          alt: 'playstation'
        },
        {
          image: '../assets/img/s2.png',
          alt: 'mouse'
        },
        {
          image: '../assets/img/s3.png',
          alt: 'vr'
        },
        {
          image: '../assets/img/s4.png',
          alt: 'beats'
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
          <p class="text-green fw-bold fs-5 text-center">Gammer Shop</p>
          <h2 class="title fw-bold text-white text-center">Explore Our Shop</h2>
        </div>
      </div>
      <div class="card-box pt-5">
        <div class="col d-flex justify-content-between gap-5">
          <div class="card border-0" v-for="slide in slides">
            <img :src="getImg(slide.image)" class="card-img-top rounded-3 p-5" :alt="slide.alt">
            <div class="card-body">
              <p><i class="fa-solid fa-star-half-stroke" style="color: #00ac4d;"></i> 
                <i class="fa-solid fa-star-half-stroke" style="color: #00ac4d;"></i> 
                  <i class="fa-solid fa-star-half-stroke" style="color: #ffffff;"></i> 
                  <i class="fa-solid fa-star-half-stroke" style="color: #ffffff;"></i></p>
              <h5 class="card-title text-white fw-bold">Asus Rog Strix A53</h5>
              <p class="card-text text-white fw-bold"><span class="text-success">$970.00</span> $999.00</p>
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
  background-color: $color-primary;
  background-image: url(../assets/img/shop-bg.png);
  background-size: cover;
  height: 800px;
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
  }
  .card-box {
    position: relative;
    .card {
      background-color: transparent;

      img {
        object-fit: contain;
      }
      .card-img-top {
        background-color: $color-primary;
        height: 300px;
        width: 320px;
      }
    }
    .btn-box {
      position: absolute;
      top: -70px;
      right: 0;
      .prev, .next {
        padding-top: 12px;
      }
    }
  }
}
</style>