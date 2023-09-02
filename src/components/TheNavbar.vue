<script>
export default {
  data() {
    return {
      navItems: ['HOME', 'PAGES', 'TOURNAMENT', 'SHOP', 'BLOG', 'CONTACT']
    }
  }
}
</script>



<template>
  <nav>
    <div class="container-fluid nav-bg">
      <div class="container p-2 d-flex justify-content-between">
        <div>
          <a href="#0">
            <img style="height: 75px;" src="../assets/img/menulogo.png" alt="">
          </a>
        </div>
        <div>
          <ul class="d-flex gap-4 list-inline">
            <li class="fw-bold" v-for="navItem in navItems"><a class="text-decoration-none" href="#0">{{ navItem }}</a>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <a href="#0">
            <div class="rounded-circle bg-white pr-xy">
              <i class="fa-solid fa-magnifying-glass fs-5 p-1" style="color: #3c3c93;"></i>
            </div>
          </a>
          <a href="#0">
            <div class="rounded-circle bg-white pr-xy">
              <i class="fa-solid fa-bag-shopping fs-5 p-1" style="color: #3c3c93;"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.nav-bg {
  background-color: rgba(0, 0, 0, .4);

  ul {
    line-height: 60px;

    a {
      color: $white;
      
      &:hover {
        color: $green-secondary;
      }
    }
  }
  .pr-xy {
    padding: 8px 10px;
    aspect-ratio: 1/1;
  }
}
</style>