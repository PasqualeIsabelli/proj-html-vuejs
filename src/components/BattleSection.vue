<script>
export default {
  data() {
    return {
      battleMenu: ['All', 'Pubg', 'COD', 'AC', 'MCX'],
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
            <ul class="d-flex justify-content-center gap-4 list-inline">
              <li class="fw-bold" v-for="item in battleMenu"><a class="text-decoration-none fs-5" href="#0">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-box d-flex flex-column gap-4">
          <!--1-->
          <div class="row battle rounded-4 pippo">
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 px-4 py-5">
                <div class="card rounded-4">
                  <img src="../assets/img/t1.png" class="card-img-top rounded-3 px-4 py-3" alt="king">
                  <div class="card-body">
                    <p class="text-green">Italy</p>
                    <h5 class="text-white fw-bold fs-4">King Gaming</h5>
                  </div>
                </div>
                <div class="vs rounded-3">
                  <p class="text-green text-center fs-1 fw-bold">vs</p>
                </div>
                <div class="card">
                  <img src="../assets/img/t2.png" class="card-img-top rounded-3 p-3" alt="astro">
                  <div class="card-body">
                    <p class="text-green">India</p>
                    <h5 class="text-white fw-bold fs-4">Astro Gaming</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 ps-2 pe-4 py-5 gap-5">
                <div class="text">
                  <h2 class="text-white fw-bold">Assassin's Creed</h2>
                  <p class="text-white">Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vivamus magna justo.</p>
                </div>
                <div class="timing rounded-4 p-4">
                  <h2 class="text-white text-center">09.45</h2>
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
          <!--2-->
          <div class="row battle rounded-4 pippo">
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 px-4 py-5">
                <div class="card rounded-4">
                  <img src="../assets/img/t3.png" class="card-img-top rounded-3 px-4 py-3" alt="ninja">
                  <div class="card-body">
                    <p class="text-green">Italy</p>
                    <h5 class="text-white fw-bold fs-4">Ninja Gaming</h5>
                  </div>
                </div>
                <div class="vs rounded-3">
                  <p class="text-green text-center fs-1 fw-bold">vs</p>
                </div>
                <div class="card">
                  <img src="../assets/img/t4.png" class="card-img-top rounded-3 p-3" alt="witch">
                  <div class="card-body">
                    <p class="text-green">India</p>
                    <h5 class="text-white fw-bold fs-4">Witch Gaming</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 ps-2 pe-4 py-5 gap-5">
                <div class="text">
                  <h2 class="text-white fw-bold">PUBG Battelground</h2>
                  <p class="text-white">Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vivamus magna justo.</p>
                </div>
                <div class="timing rounded-4 p-4">
                  <h2 class="text-white text-center">10.45</h2>
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
          <!--3-->
          <div class="row battle rounded-4 pippo">
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 px-4 py-5">
                <div class="card rounded-4">
                  <img src="../assets/img/t5.png" class="card-img-top rounded-3 px-4 py-3" alt="dragon">
                  <div class="card-body">
                    <p class="text-green">Italy</p>
                    <h5 class="text-white fw-bold fs-4">Dgn Gaming</h5>
                  </div>
                </div>
                <div class="vs rounded-3">
                  <p class="text-green text-center fs-1 fw-bold">vs</p>
                </div>
                <div class="card">
                  <img src="../assets/img/t6.png" class="card-img-top rounded-3 p-3" alt="joker">
                  <div class="card-body">
                    <p class="text-green">India</p>
                    <h5 class="text-white fw-bold fs-4">Joker Gaming</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 ps-2 pe-4 py-5 gap-5">
                <div class="text">
                  <h2 class="text-white fw-bold">Mortal Combat X</h2>
                  <p class="text-white">Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vivamus magna justo.</p>
                </div>
                <div class="timing rounded-4 p-4">
                  <h2 class="text-white text-center">08.45</h2>
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
          <!--4-->
          <div class="row battle rounded-4 pippo">
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 px-4 py-5">
                <div class="card rounded-4">
                  <img src="../assets/img/t7.png" class="card-img-top rounded-3 px-4 py-3" alt="shark">
                  <div class="card-body">
                    <p class="text-green">Italy</p>
                    <h5 class="text-white fw-bold fs-4">Shark Gaming</h5>
                  </div>
                </div>
                <div class="vs rounded-3">
                  <p class="text-green text-center fs-1 fw-bold">vs</p>
                </div>
                <div class="card">
                  <img src="../assets/img/t8.png" class="card-img-top rounded-3 p-3" alt="krull">
                  <div class="card-body">
                    <p class="text-green">India</p>
                    <h5 class="text-white fw-bold fs-4">Krull Gaming</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between rounded-4 ps-2 pe-4 py-5 gap-5">
                <div class="text">
                  <h2 class="text-white fw-bold">Call Of Duty</h2>
                  <p class="text-white">Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vivamus magna justo.</p>
                </div>
                <div class="timing rounded-4 p-4">
                  <h2 class="text-white text-center">04.45</h2>
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