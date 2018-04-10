<template lang="html">
  <div :class="$style.home">
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <HomeIcons></HomeIcons>
    <Home-list></Home-list>
    <Home-weekends></Home-weekends>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeList from './components/HomeList.vue'
import HomeWeekends from './components/HomeWeekend.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeList,
    HomeWeekends
  }
}
</script>

<style lang="scss" module>
  .home {
    background: #f5f5f5;
  }
</style>
