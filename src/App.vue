<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import StreamingSection from './components/StreamingSection.vue';
import BattleSection from './components/BattleSection.vue';
import GamesSection from './components/GamesSection.vue';
import MatchSection from './components/MatchSection.vue';
import TeamSection from './components/TeamSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ShopSection from './components/ShopSection.vue';
import LatestSection from './components/LatestSection.vue';



export default {
  components: {
    TheHeader,
    TheFooter,
    ExperienceSection,
    FeatureSection,
    StreamingSection,
    BattleSection,
    GamesSection,
    MatchSection,
    TeamSection,
    TestimonialsSection,
    ShopSection,
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
    <BattleSection></BattleSection>
    <GamesSection></GamesSection>
    <MatchSection></MatchSection>
    <TeamSection></TeamSection>
    <TestimonialsSection></TestimonialsSection>
    <ShopSection></ShopSection>
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