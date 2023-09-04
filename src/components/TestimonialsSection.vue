<script>
export default {
  data() {
    return {
      slides: ['../assets/img/test1.png', '../assets/img/test2.png', '../assets/img/test3.png', '../assets/img/test4.png',]
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
    <div class="left"></div>
    <div class="right"></div>
    <div class="alpha-container"></div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p class="text-green fw-bold fs-5 text-center">Testimonials</p>
          <h2 class="title fw-bold text-white text-center">What Our Client Say</h2>
        </div>
      </div>
      <div class="row">
        <div class="mt-5 d-flex justify-content-between gap-2 card-content">
          <div class="card border-0" v-for="slide in slides">
            <img :src="getImg(slide)" class="card-img-top">
            <div class="text-box p-4">
              <i class="fa-solid fa-quote-left fs-1" style="color: #00ac4d;"></i>
              <p class="desc text-white fw-bold">Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget</p>
              <div>
                <h3 class="text-green fw-bold">Mohammad Sala</h3>
                <p class="text-white">CEO/Founder</p>
              </div>
            </div>
          </div>
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
  height: 800px;
  position: relative;
  .alpha-container {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .left {
    background-image: url(../assets/img/test-grouptwo.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 50%;
  }
  .right{
    background-image: url(../assets/img/test-group.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }
  .container {
    position: relative;
    height: 100%;
    padding: 100px 0;
    .text-green {
      color: $green-secondary;
    }
    .title {
      font-size: 50px;
    }
    .card-content {
      position: relative;
      .card {
        background-color: transparent;
        .text-box {
          background-color: $color-primary;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: all 0.3s;
          
          &:hover {
            opacity: 1;
          }
          .desc {
            font-size: 18px;
          }
        }
      }
      .prev, .next {
        padding-top: 12px;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }
      .prev {
        left: 130px;
      }
      .next {
        right: 130px;
      }
    }
  }
}
</style>