<script>
export default {
  data() {
    return {}
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
              <button type="button" class="btn btn-success rounded-circle px-4 py-3"><i class="fa-solid fa-play" style="color: #ffffff;"></i></button>
            </div>
            <div>
              <p class="text-white fs-4">Call Of Duty</p>
            </div>
          </div>
        </div>
        <div class="col-6 p-4">
          <div class="section-text">
            <p class="text-green fw-bold fs-5">Live Streaming</p>
            <h2 class="text-white title fw-bold">Checkout Our Live Straming</h2>

            
            <div class="pippo mt-4 d-flex gap-3">
              <div class="prev pippo rounded-circle"></div>
              <div class="next pippo rounded-circle"></div>

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
  }
}

.pippo {
  border: 1px solid red;
}
.prev, .next {
  height: 50px;
  width: 50px;
}
</style>