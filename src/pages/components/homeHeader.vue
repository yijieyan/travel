<template lang="html">
  <div :class="$style.homeHeader">
    <div :class="$style.left">
      <i :class="['iconfont', 'icon-left', $style.back]"></i>
    </div>
    <div :class="$style.input">
      <i :class="['iconfont', 'icon-bottom4', $style.search]"></i>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div :class="$style.right">
      <span>城市</span>
      <i :class="['iconfont', 'icon-arrowbottom', $style.arrow]"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" module>
  @import '../../assets/style/global.scss';
  .homeHeader {
    display: flex;
    flex-direction: row;
    background: $bgcolor;
    height: 88px;
    line-height: 88px;
    .left {
      float: left;
      width: 80px;
      height: 88px;
      text-align: center;
      color: #fff;
      .back {
        font-size: 68px;
      }
    }
    .input {
      flex: 1;
      border-radius: 8px;
      background: #fff;
      margin-top: 10px;
      margin-bottom: 10px;
      line-height: 68px;
      font-size: 28px;
      color: #e4e7ea;
      .search {
        font-size: 40px;
        margin-left: 20px;
        color: #e4e7ea;
      }
    }
    .right {
      float: right;
      width: 132px;
      height: 88px;
      color: #fff;
      font-size: 28px;
      padding-left: 22px;
      box-sizing: border-box;
      .arrow {
        font-size: 28px;
      }
    }
  }
</style>
