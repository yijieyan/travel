<template lang="html">
  <div :class="$style.container">
    <h4>{{title}}</h4>
    <ul>
      <li v-for="(item) in weekendList" :key="item.id">
        <div :class="$style.img">
          <img :src="item.imgUrl"/>
        </div>
        <div :class="$style.info">
          <h4 :class="$style.title">{{item.title}}</h4>
          <p :class="$style.desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    weekendList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      title: '周末去哪'
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../assets/style/global.scss';
  .container {
    margin-top: 20px;
    background: #fff;
    >h4 {
      padding-left: 20px;
      padding-top: 20px;
      text-align: left;
      font-size: 32px;
      height: 44px;
      line-height: 44px;
      color: #212121;
    }
    ul {
      list-style: none;
      > li {
        .img {
          width: 100%;
          height: 0;
          overflow: hidden;
          padding-bottom: 38%;
          >img {
            width: 100%;
          }
        }
        .info {
          padding: 14px 0px 20px 20px;
          .title {
            color: #212121;
            height: 42px;
            line-height: 48px;
            font-size: 28px!important;
          }
          .desc {
            color:#616161;
            height: 42px;
            line-height: 42px;
            font-size: 24px!important;
            @include ellipsis();
          }
        }
      }
    }
  }
</style>
