<template lang="html">
  <div :class="$style.container">
    <swiper :options="swiperOption">
       <swiper-slide v-for="item in imgs" :key="item.id">
         <img :src="item.imgUrl"/>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
  </div>
</template>

<script>
import http from '../../services/APIServer'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgs: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      let res = await http.get('/static/index.json')
      if (res.ret === true) {
        this.imgs = res.data.swiperList
      } else {
        alert('出错了')
      }
    }
  }
}
</script>

<style lang="scss" module>
  .container >>> .swiper-pagination-bullet-active {
    background: red!important;
  }
  .container {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31%;
    img {
      width: 100%;
    }
  }
</style>
