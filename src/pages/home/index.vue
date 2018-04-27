<template lang="html">
  <div :class="$style.home">
    <Home-header :city="getCity"></Home-header>
    <div :class="$style.body" ref="body">
      <div>
        <Home-swiper :imgs="imgs"></Home-swiper>
        <HomeIcons :iconList="iconList"></HomeIcons>
        <Home-list :list="list"></Home-list>
        <Home-weekends :weekendList="weekendList"></Home-weekends>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeList from './components/HomeList.vue'
import HomeWeekends from './components/HomeWeekend.vue'
import http from '../../services/APIServer'
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
  mounted () {
    let dom = this.$refs.body
    this.scroll = new BScroll(dom, {
      click: true
    })
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeList,
    HomeWeekends
  },
  computed: {
    getCity () {
      return this.$store.state.city
    }
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
    overflow: hidden;
    height: 100vh;
    .body {
      height: 100vh;
      overflow: hidden;
    }
  }
</style>
