<template lang="html">
  <div :class="$style.home">
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <div class="">
      test
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/homeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="scss" module>

</style>
