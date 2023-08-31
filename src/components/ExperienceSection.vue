<script>


export default {
  data() {
    return {}
  }
}
</script>



<template>
  <section>
    <div class="section-content">
      <div class="img-box container rounded-3 d-flex justify-content-evenly gap-5 p-5">
        <div class="image">
          <img src="../assets/img/1.png" alt="ninja">
        </div>
        <div class="image">
          <img src="../assets/img/2.png" alt="king">
        </div>
        <div class="image">
          <img src="../assets/img/3.png" alt="skull">
        </div>
        <div class="image">
          <img src="../assets/img/4.png" alt="panda">
        </div>
        <div class="image">
          <img src="../assets/img/5.png" alt="witch">
        </div>
        <div class="image">
          <img src="../assets/img/6.png" alt="astro">
        </div>
      </div>
      <div class="section-box col-8 m-auto">
        <div class="experience d-flex">
          <div class="experience-image-box">
            <div class="experience-image">
              
            </div>
            <div class="shape-big">
              
            </div>
            <div class="shape-small">
              
            </div>
            <div class="shape-grid">

            </div>
          </div>
          <div class="experience-text">
            <p class="text-green fw-bold fs-5">12 Year Experience</p>
            <h2 class="text-white title fw-bold">We Are The Best Gaming Company</h2>
            <p class="text-white mt-5">Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi praesent sapien massa ligula sed magna dictum porta.
              <br>
              <br>
              Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligulaa.</p>
              <p class="text-white fw-bold"><span class="text-success border border-success rounded-circle asp-ratio px-1"><i class="fa-solid fa-check" style="color: #00ac4d;"></i></span> Sed porttitor lectus nibh. Proin eget tortor risus.</p>
              <p class="text-white fw-bold"><span class="text-success border border-success rounded-circle asp-ratio px-1"><i class="fa-solid fa-check" style="color: #00ac4d;"></i></span> Praesent sapien massa, convallis a pellentesque nec. risus.</p>
              <p class="text-white fw-bold"><span class="text-success border border-success rounded-circle asp-ratio px-1"><i class="fa-solid fa-check" style="color: #00ac4d;"></i></span> Praesent sapien massa, convallis a pellentesque nec. risus.</p>
              <p class="text-white fw-bold"><span class="text-success border border-success rounded-circle asp-ratio px-1"><i class="fa-solid fa-check" style="color: #00ac4d;"></i></span> Praesent sapien massa, convallis a pellentesque nec. risus.</p>
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
  .section-content {
    position: relative;
    .img-box {
      background-color: $color-secondary;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      .image {
        height: 150px;
      }
    }
    .section-box {
      padding: 100px 0;
      .experience {
        margin-top: 150px;
        gap: 75px;
        .experience-image-box {
          position: relative;
          padding: 50px;
        }
        .experience-image {
          width: 500px;
          height: 500px;
          background-image: url(../assets/img/exprince.jpg);
          position: relative;
          z-index: 1000;
        }
        .shape-big {
          width: 470px;
          height: 470px;
          background-image: url(../assets/img/shape1.png);
          position: absolute;
          top: 0;
          left: 0;
        }
        .shape-small {
          width: 260px;
          height: 260px;
          background-image: url(../assets/img/shape2.png);
          position: absolute;
          right: 10px;
          bottom: 10px;
        }
        .shape-grid{
          width: 120px;
          height: 120px;
          background-image: url(../assets/img/exprience-shape.png);
          position: absolute;
          top: 35px;
          left: -80px;
          z-index: 999;
        }
        .text-green {
          color: $green-secondary;
        }
        .title {
          font-size: 50px;
        }
        .asp-ratio {
          aspect-ratio: 1/1;
        }
      }
    }
  }
}
</style>