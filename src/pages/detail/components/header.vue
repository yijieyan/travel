<template lang="html">
  <div :class="$style.container">
    <div :class="$style.headerOne" v-if="status" @click="handleClickBack">
      <i :class="['iconfont', 'icon-left', $style.arrow]"></i>
    </div>
    <div :class="$style.headerTwo" :style="{ opacity: opacity }" v-else>
      <div :class="$style.arrow" @click="handleClickBack">
        <i :class="['iconfont', 'icon-left', $style.back]"></i>
      </div>
      <div :class="$style.title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    status: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClickBack () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" module>
@import '../../../assets/style/global.scss';
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: $headerHeight;
  .headerOne {
      height: $headerHeight;
      width: 100%;
      margin-top: 20px;
      margin-left: 20px;
      .arrow {
          background: #000;
          opacity: 0.5;
          border-radius: 50%;
          line-height: 68px;
          font-size: 68px;
          color: #fff;
      }
  }
  .headerTwo {
      height: $headerHeight;
      width: 100%;
      background: $bgcolor;
      .arrow {
          height: 100%;
          width: $headerHeight;
          float: left;
          .back {
              font-size: $headerHeight;
              color: #fff;
          }
      }
      .title {
          color: #fff;
          width: 100%;
          margin-left: -$headerHeight;
          font-size: 32px;
          text-align: center;
          height: $headerHeight;
          line-height: $headerHeight;
      }
  }
}
</style>
