<script>
export default {
  data() {
    return {
      footerItems: ['HOME', 'PAGES', 'TOURNAMENT', 'SHOP', 'BLOG', 'CONTACT'],
      // socialItems: [
      //   {
      //     social: `<i class="fa-brands fa-facebook" style="color: #ffffff;"></i>`
      //   }, {
      //     social: `<i class="fa-brands fa-twitter" style="color: #ffffff;"></i>`
      //   }, {
      //     social: `<i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>`
      //   }, {
      //     social: `<i class="fa-brands fa-instagram" style="color: #ffffff;"></i>`
      //   }
      // ]      
    }
  }
}
</script>



<template>
  <footer>
    <div class="alpha-container"></div>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <img src="../assets/img/menulogo.png">
        </div>
        <div class="col lineheight">
          <ul class="d-flex justify-content-end gap-4 list-inline">
            <li class="fw-bold" v-for="footerItem in footerItems"><a class="text-decoration-none" href="#0">{{ footerItem }}</a></li>
          </ul>
        </div>
      </div>
      <div class="row border"></div>
      <div class="row mt-4">
        <div class="col">
          <p class="text-white fw-bold">Copyright &copy; RaxG | Designed by <span class="text-green">NextGenerationDev</span>
          </p>
        </div>
        <div class="col">
          <ul class="d-flex justify-content-end gap-4">
            <li>
              <a href="#0" class="social">
                <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
              </a>
            </li>
            <li>
              <a href="#0" class="social">
                <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
              </a>
            </li>
            <li>
              <a href="#0" class="social">
                <i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>
              </a>
            </li>
            <li>
              <a href="#0" class="social">
                <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
              </a>
            </li>
          </ul>          
        </div>
      </div>
    </div>
  </footer>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

footer {
  background-image: url(../assets/img/footer-bg.png);
  height: 400px;
  position: relative;
  .alpha-container {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .container {
    position: relative;
    height: 100%;
    padding-top: 120px;
    .lineheight{
      line-height: 100px;
    }

      a {
        color: $white;

        &:hover {
          color: $green-secondary;
        }
      }
      .social{
        display: block;
        text-transform: uppercase;
        font-size: 14px;
        width: 45px;
        height: 45px;
        line-height: 45px;
        border-radius: 50%;
        background-color: $color-secondary;
        text-align: center;
        transition: all 0.3s;

        &:hover {
        background-color: $green-secondary;
        }
      }
    .text-green {
      color: $green-secondary;
    }
    .social {
      background-color: $color-secondary;
      aspect-ratio: 1/1;
      
      &:hover {
      background-color: $green-secondary;
      }
    }
  }
}
</style>
