<template lang="html">
  <div :class="$style.container">
    <h4 :class="$style.title">{{title}}</h4>
    <ul>
      <li v-for="(item) in list" :key="item.id" :class="[$style.item, 'border-bottom']">
        <img :src="item.imgUrl"/>
        <span>可订今日</span>
        <div :class="$style.info">
          <h4>{{item.title}}</h4>
          <p>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      title: '猜你喜欢'
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../assets/style/global.scss';
  .container {
    margin-top: 20px;
    padding-left: 20px;
    padding-top: 20px;
    background: #fff;
    .title {
      text-align: left;
      font-size: 32px;
      height: 44px;
      line-height: 44px;
      color: #212121;
    }
    ul {
      list-style: none;
      .item {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        position: relative;
        > span {
          position: absolute;
          left:0;
          top:0;
          display: block;
          background: #ff9b12;
          color:#fff;
          padding: 5px;
          font-size: 24px;
        }
        img {
          width: 140px;
          height: 140px;
          margin-bottom: 10px;
        }
        .info {
          padding-left: 20px;
          width: 400px;
          >h4 {
            color: #212121;
            margin-top: 20px;
            font-size: 40px;
          }
          >p {
            margin-top: 30px;
            color: #616161;
            font-size: 24px;
            @include ellipsis();
          }
        }
      }
    }
  }
</style>
