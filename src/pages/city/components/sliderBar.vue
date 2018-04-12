<template lang="html">
  <div :class="$style.container" ref="box">
    <ul>
      <li v-for="(item) in bars"
        :key="item" @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    citys: {
      type: Object
    }
  },
  data () {
    return {
      isTouch: false,
      timer: null
    }
  },
  computed: {
    bars () {
      return Object.keys(this.citys)
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.isTouch = true
    },
    handleTouchMove (e) {
      if (this.isTouch) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let offsetTop = this.$refs.box.offsetTop
          let clientY = e.touches[0].clientY
          let len = clientY - offsetTop
          let index = Math.floor(len / 32)
          this.$emit('change', this.bars[index])
        }, 15)
      }
    },
    handleTouchEnd () {
      this.isTouch = false
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../../assets/style/global.scss';
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 240px;
    right: 10px;
    >ul {
      list-style: none;
      li {
        color:$bgcolor;
        font-size: 30px;
        height: 32px;
        width: 32px;
        text-align: center;
        line-height: 32px;
      }
    }
  }
</style>
