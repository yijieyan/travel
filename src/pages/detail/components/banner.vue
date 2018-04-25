<template lang="html">
  <div :class="$style.container" id="container">
    <img :src="img" :class="$style.img" @click="handleClickShow"/>
    <div :class="$style.footer">
      <div :class="$style.pic">
        <i :class="['iconfont' , 'icon-picture', $style.pics]"></i>
        <span :class="$style.text">62</span>
      </div>
      <div :class="$style.title">
        {{text}}
      </div>
    </div>
    <div :class="$style.bottom"></div>
    <section :class="$style.layer" v-if="isShow" @click="handleClickHide">
      <div :class="$style.position">
        <swiper :options="swiperOption">
         <swiper-slide v-for="(item) in imgs" :key="item">
            <img :src="item" :class="$style.img">
         </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    imgs: {
      type: Array,
      defult: () => {
        return []
      }
    },
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  methods: {
    handleClickShow () {
      this.isShow = true
    },
    handleClickHide () {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    position: relative;
    height: 1136px;
    width: 640px;
    overflow: hidden;
    .img {
        width: 100%;
        height: 352px;
    }
    .footer {
        position: absolute;
        top: 226px;
        left: 0;
        right: 0;
        .pic {
            width: 120px;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            background: #000;
            opacity: 0.5;
            border-radius: 20px;
            .pics {
                margin-left: 16px;
                font-size: 24px;
                color: #fff;
                vertical-align: top;
                display: inline-block;
            }
            .text {
                display: inline-block;
                margin-left: 10px;
                width: 27px;
                height: 28px;
                color: #fff;
                font-size: 24px;
                vertical-align: top;
            }
        }
        .title {
            margin-left: 20px;
            margin-top: 20px;
            text-align: left;
            color: #fff;
            font-size: 36px;
            text-shadow: 0 1px 2px rgba(0,0,0,0.70);
        }
    }
    .bottom {
        position: absolute;
        left: 0;
        right: 0;
        top: 298px;
        height: 60px;
        background: transparent;
        background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
    }
    .layer {
        position: absolute;
        z-index:100;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        .position {
          position: relative;
          top: 30%;
          left: 0;
          right: 0;
          .img {
            width: 100%;
          }
        }
    }
  }
</style>

<style lang="css" scoped>
  #container >>> .swiper-pagination-fraction {
    font-size: 24px;
    color: #fff;
  }
</style>
