<template lang="html">
  <div :class="$style.container">
    <banner :imgs="imgs" :img="img" :text="text"></banner>
    <nav-header  :title="title" :status="status" :opacity="opacity"></nav-header>
    <ticket :items="items"></ticket>
  </div>
</template>

<script>
import http from '../../services/APIServer'
import NavHeader from './components/header.vue'
import Banner from './components/banner.vue'
import Ticket from './components/ticket.vue'
export default {
  components: {
    NavHeader,
    Banner,
    Ticket
  },
  data () {
    return {
      title: '',
      img: '',
      imgs: [],
      text: '',
      status: true,
      opacity: 0,
      items: []
    }
  },
  mounted () {
    this.init()
    window.addEventListener('scroll', this.scrollerEvent)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollerEvent)
  },
  methods: {
    scrollerEvent () {
      let top = document.documentElement.scrollTop
      let opacity = top / 150
      this.opacity = opacity < 1 ? opacity : 1
      if (top > 88) {
        this.status = false
      } else {
        this.status = true
      }
    },
    async init () {
      let res = await http.get('/static/detail.json')
      if (res.ret === true) {
        let data = res.data
        this.title = data.title
        this.text = data.sightName
        this.img = data.bannerImg
        this.imgs = data.gallaryImgs
        this.items = data.categoryList
      }
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    position: relative;
    height: 1400px;
  }
</style>
