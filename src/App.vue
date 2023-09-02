<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import StreamingSection from './components/StreamingSection.vue';
import LatestSection from './components/LatestSection.vue';


export default {
  components: {
    TheHeader,
    TheFooter,
    ExperienceSection,
    FeatureSection,
    StreamingSection,
    LatestSection
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
    <FeatureSection></FeatureSection>
    <StreamingSection></StreamingSection>
    <LatestSection></LatestSection>
  </main>

  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>



<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;

</style>