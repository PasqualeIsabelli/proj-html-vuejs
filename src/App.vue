<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ExperienceSection from './components/ExperienceSection.vue';


export default {
  components: {
    TheHeader,
    TheFooter,
    ExperienceSection,
  },
  data() {
    return {}
  }
}
</script>



<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <main>
    <ExperienceSection></ExperienceSection>
  </main>

  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>



<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;


</style>
