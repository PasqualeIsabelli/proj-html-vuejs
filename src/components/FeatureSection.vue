<script>
export default {
  data() {
    return {
      cards: [
        {
          img: '../assets/img/feature1.png',
          title: 'Live Straming',
          text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.',
        }, {
          img: '../assets/img/feature2.png',
          title: 'Gaming News',
          text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.',
        }, {
          img: '../assets/img/feature3.png',
          title: 'Great Tournament',
          text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.',
        }, {
          img: '../assets/img/feature4.png',
          title: 'Award Ceremony',
          text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.',
        }
      ]
    }
  },
  methods: {
    getImg(img) {
      return new URL(img, import.meta.url).href
    }
  }
}
</script>



<template>
  <section>
    <div class="alpha-container"></div>
    <div class="container d-flex">
      <div class="col-6 p-4 mt-5">
        <div class="section-text">
          <p class="text-green fw-bold fs-5">Our Extrem Feature</p>
          <h2 class="text-white title fw-bold">The Best Gaming Arena On The World!</h2>
          <p class="text-white mt-5">
            Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, at tellus.
            Cras ultricies ligula sed magna ivamus magna justo, dictum porta. sapien massa, convallis.
          </p>
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex flex-wrap gap-3">
          <div class="feature-card rounded-4 p-5" v-for="card in cards">
            <div class="card-img rounded-circle text-center m-auto">
              <img class="mt-4" :src="getImg(card.img)">
            </div>
            <div class="card-text m-auto mt-3">
              <h4 class="text-center text-white">{{ card.title }}</h4>
              <p class="text-center text-white">{{ card.text }}</p>
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
  background-color: $color-tertiary;
  background-image: url(../assets/img/Vector.png);
  position: relative;
  .alpha-container {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .container {
    padding: 100px 0;
    position: relative;
    .section-text {
      margin-top: 120px;
      .text-green {
        color: $green-secondary;
      }
      .title {
        font-size: 50px;
      }
    }
    .feature-card {
      background-color: $blue-details;
      aspect-ratio: 1/1;
      width: calc(100% / 2 - 1rem);
      .card-img {
        background-color: $color-secondary;
        height: 120px;
        width: 120px;
      }
      &:hover {
        background-color: $green-primary;
      }
    }
  }
}
</style>