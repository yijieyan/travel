<template lang="html">
  <div :class="$style.container">
    <banner :imgs="imgs" :img="img" :text="text"></banner>
    <nav-header  :title="title" :status="status" :opacity="opacity"></nav-header>
  </div>
</template>

<script>
import NavHeader from './components/header.vue'
import Banner from './components/banner.vue'
export default {
  components: {
    NavHeader,
    Banner
  },
  data () {
    return {
      title: '深圳欢乐谷',
      img: '//img1.qunarzz.com/sight/p0/1412/4b/632fe62f622b9b112cdf9f3b80ce8f78.water.jpg_600x330_ff9705d1.jpg',
      imgs: [
        '//img1.qunarzz.com/sight/p0/1606/11/11be546bf06d4f67b4.water.jpg_r_800x800_a708e50f.jpg',
        '//img1.qunarzz.com/sight/p0/1606/9f/9f866cdd66a022b7b4.water.jpg_r_800x800_20d5549e.jpg',
        '//img1.qunarzz.com/sight/p0/1412/3a/09380cdba7d3999d208c9bf3e3b7670c.water.jpg_r_800x800_274ed038.jpg',
        '//img1.qunarzz.com/sight/p0/1412/24/cdc1796c73dada178f2d548dd3aa0634.water.jpg_r_800x800_f4f1dd46.jpg',
        '//img1.qunarzz.com/sight/p0/1412/d9/0448d665d385d2ba672e4148fffbc60e.water.jpg_r_800x800_3e0fb4e1.jpg',
        '//img1.qunarzz.com/sight/p0/1412/fe/e524f9a3a3deb64eb5e7594d9a6e1766.water.jpg_r_800x800_55348372.jpg'
      ],
      text: '深圳欢乐谷(AAAAA景区)',
      status: true,
      opacity: 0
    }
  },
  mounted () {
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
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    position: relative;
    height: 2000px;
  }
</style>
