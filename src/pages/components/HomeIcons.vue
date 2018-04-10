<template lang="html">
  <section :class="$style.container">
    <swiper :options="swiperOption">
       <swiper-slide v-for="(page, index) in pages" :key="index">
         <div v-for="(item) in page" :key="item.id" :class="$style.item">
           <img :src="item.imgUrl"/>
           <p :class="$style.text">{{item.desc}}</p>
         </div>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
  </section>
</template>

<script>
import http from '../../services/APIServer'
export default {
  data () {
    return {
      iconList: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created () {
    this.init()
  },
  computed: {
    pages () {
      let arr = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!arr[page]) {
          arr[page] = []
        }
        arr[page].push(item)
      })
      return arr
    }
  },
  methods: {
    async init () {
      let res = await http.get('/static/index.json')
      if (res.ret === true) {
        this.iconList = res.data.iconList
      } else {
        alert('出错了')
      }
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../assets/style/global.scss';
  .container {
    background: #fff;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
    .item {
      float: left;
      width: 25%;
      height: 0;
      overflow: hidden;
      padding-bottom: 25%;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-top: 16px;
      }
      .text {
        color: #212121;
        font-size: 28px;
        margin-top: 16px;
        @include ellipsis()
      }
    }
  }
</style>
