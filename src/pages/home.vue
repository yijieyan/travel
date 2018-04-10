<template lang="html">
  <div :class="$style.home">
    <Home-header></Home-header>
    <Home-swiper :imgs="imgs"></Home-swiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <Home-list :list="list"></Home-list>
    <Home-weekends :weekendList="weekendList"></Home-weekends>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeList from './components/HomeList.vue'
import HomeWeekends from './components/HomeWeekend.vue'
import http from '../services/APIServer'
export default {
  data () {
    return {
      iconList: [],
      list: [],
      imgs: [],
      weekendList: []
    }
  },
  created () {
    this.init()
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeList,
    HomeWeekends
  },
  methods: {
    async init () {
      let res = await http.get('/static/index.json')
      if (res.ret === true) {
        this.iconList = res.data.iconList
        this.list = res.data.recommendList
        this.imgs = res.data.swiperList
        this.weekendList = res.data.weekendList
      } else {
        alert('出错了')
      }
    }
  }
}
</script>

<style lang="scss" module>
  .home {
    background: #f5f5f5;
  }
</style>
