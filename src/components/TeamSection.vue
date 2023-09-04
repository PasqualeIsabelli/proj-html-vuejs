<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '../assets/img/team1.png',
          alt: 'team1',
          name: 'Cristiano Messi',
          role: 'CEO/Founder'
        }, {
          image: '../assets/img/team2.png',
          alt: 'team2',
          name: 'Sergio Naymer',
          role: 'Programmer'
        }, {
          image: '../assets/img/team3.png',
          alt: 'team3',
          name: 'Antonela Roccuzzo',
          role: 'Project Manager'
        }, {
          image: '../assets/img/team4.png',
          alt: 'team4',
          name: 'Lionel Ramos',
          role: 'Game Designer'
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
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p class="text-green fw-bold fs-5">Team Members</p>
          <h2 class="title fw-bold text-white">Our Experts Team Members</h2>
        </div>
      </div>
      <div class="card-box">
        <div class="mt-5 d-flex justify-content-between gap-4">
          <div class="card border-0 rounded-0" v-for="slide in slides">
            <img :src="getImg(slide.image)" class="card-img-top rounded-0" :alt="slide.alt">
            <div class="card-body my-2">
              <h5 class="card-title text-white text-center">{{ slide.name }}</h5>
              <p class="card-text text-white text-center">{{ slide.role }}</p>
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
  height: 850px;
  .container {
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

        &:hover {
          background-color: $green-primary;
        }
      }
      .btn-box {
        position: absolute;
        top: -120px;
        right: 0;
        .prev, .next {
          padding-top: 12px;
        }
      }
    }
  }  
}
</style>