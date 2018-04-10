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
export default {
  props: {
    imgs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  prop: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        // autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
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
