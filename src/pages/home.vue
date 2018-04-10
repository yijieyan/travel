<template lang="html">
  <div :class="$style.home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
import HomeHeader from './components/homeHeader.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss" module>

</style>
