<template lang="html">
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.left" @click="handClickBack">
        <i :class="['iconfont', 'icon-left', $style.back]"></i>
      </div>
      <div :class="$style.text">
        {{title}}
      </div>
    </div>
    <div :class="$style.input">
      <input type="text" v-model="value" placeholder="请输入城市" :input="input">
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: '城市选择',
      value: ''
    }
  },
  computed: {
    input () {
      this.$emit('change', this.value)
      return ''
    }
  },
  methods: {
    handClickBack () {
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
    .header {
      display: flex;
      flex-direction: row;
      height:$headerHeight;
      background: $bgcolor;
      line-height: $headerHeight;
      margin: 0 auto;
      text-align: center;
      .left {
        float: left;
        width: $headerHeight;
        color: #fff;
        text-align: center;
        .back {
          font-size: $headerHeight;
        }
      }
      .text {
        width: 100%;
        margin-left: -$headerHeight;
        color: #fff;
        font-size: 32px;
      }
    }
    .input {
      height: 80px;
      width: 100%;
      background: $bgcolor;
      padding: 5px;
      >input {
        display: block;
        height: 80px;
        width: calc(100% - 10px);
        line-height: 80px;
        padding-left: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        color: #8a8a8a;
        font-size: 28px;
        text-align: center;
      }
    }
  }
</style>
