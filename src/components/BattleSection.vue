<script>
export default {
  data() {
    return {
      battleMenu: ['All', 'Pubg', 'COD', 'AC', 'MCX'],
      battles: [
        {
          game: 'Assassin\'s Creed',
          time: '10.45',
          firstTeam: {
            name: 'King Gaming',
            image: '../assets/img/t1.png',
            alt: 'king'
          },
          secondTeam: {
            name: 'Astro Gaming',
            image: '../assets/img/t2.png',
            alt: 'astro'
          }
        }, {
          game: 'PUBG Battleground',
          time: '09.45',
          firstTeam: {
            name: 'Ninja Gaming',
            image: '../assets/img/t3.png',
            alt: 'ninja'
          },
          secondTeam: {
            name: 'Witch Gaming',
            image: '../assets/img/t4.png',
            alt: 'witch'
          }
        }, {
          game: 'Mortal Combat X',
          time: '08.45',
          firstTeam: {
            name: 'Dgn Gaming',
            image: '../assets/img/t5.png',
            alt: 'dragon'
          },
          secondTeam: {
            name: 'Joker Gaming',
            image: '../assets/img/t6.png',
            alt: 'joker'
          }
        }, {
          game: 'Call of Duty',
          time: '04.45',
          firstTeam: {
            name: 'Shark Gaming',
            image: '../assets/img/t7.png',
            alt: 'shark'
          },
          secondTeam: {
            name: 'Krull Gaming',
            image: '../assets/img/t8.png',
            alt: 'krull'
          }
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
        <div class="col">
          <p class="text-green fw-bold fs-5 text-center">Trending Battle</p>
          <h2 class="title fw-bold text-white text-center">Upcoming Match</h2>
        </div>
        <div class="row my-5">
          <div class="col">
            <ul class="d-flex justify-content-center list-inline">
              <li class="fw-bold" v-for="item in battleMenu"><a class="text-decoration-none fs-5" href="#0">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-box d-flex flex-column mb-4" v-for="battle in battles">
          <div class="row battle rounded-4">
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 px-4 py-5">
                <div class="card rounded-4">
                  <img :src="getImg(battle.firstTeam.image)" class="card-img-top rounded-3 px-4 py-3" :alt="battle.firstTeam.alt">
                  <div class="card-body">
                    <p class="text-green">Italy</p>
                    <h5 class="text-white fw-bold fs-4">{{ battle.firstTeam.name }}</h5>
                  </div>
                </div>
                <div class="vs rounded-3">
                  <p class="text-green text-center fs-1 fw-bold">vs</p>
                </div>
                <div class="card">
                  <img :src="getImg(battle.secondTeam.image)" class="card-img-top rounded-3 p-3" :alt="battle.secondTeam.alt">
                  <div class="card-body">
                    <p class="text-green">India</p>
                    <h5 class="text-white fw-bold fs-4">{{ battle.secondTeam.name }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 ps-2 pe-4 py-5 gap-5">
                <div class="text">
                  <h2 class="text-white fw-bold">{{ battle.game }}</h2>
                  <p class="text-white">Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vivamus magna justo.</p>
                </div>
                <div class="timing rounded-4 p-4">
                  <h2 class="text-white text-center">{{ battle.time }}</h2>
                  <p class="text-white text-center">1st November,2022</p>
                  <div class="d-flex justify-content-center gap-2 pt-2">
                    <div style="height: 45px; width: 45px;" class="icon rounded-circle text-center">
                      <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div style="height: 45px; width: 45px;" class="icon rounded-circle text-center">
                      <i class="fa-solid fa-message"></i>
                    </div>
                  </div>
                </div>
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
  background-color: $color-primary;
  .container {
    padding: 100px 0;
    .text-green {
      color: $green-secondary;
    }
    .title {
      font-size: 50px;
    }

    a {
      color: $white;

      &:hover {
        color: $green-secondary;
      }
    }
    .battle {
      border: 1px solid $green-primary;
      background-color: $color-secondary;
      &:hover {
        background-color: $color-tertiary;
        border: none;
        .timing {
          background-color: $green-primary;
        }
        .icon {
          color: white;
          background-color: $black;
        }
      }
      .card {
        background-color: #152258;
        .card-img-top {
          background-color: $color-primary;
          aspect-ratio: 1/1;
          height: 65%;
        }
      }
      .vs {
        background-color: $color-primary;
        aspect-ratio: 1/1;
        height: 150px;
        line-height: 150px;
        margin-top: 75px;
      }
      .text {
        margin-top: 100px;
      }
      .timing {
        background-color: $color-primary;
        margin-top: 60px;
        aspect-ratio: 1/1;
        width: 500px;
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
    }
  }
}
</style>