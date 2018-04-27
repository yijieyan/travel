<template lang="html">
  <section :class="$style.container">
    <div v-for="(item, index) in items" :key="index">
      <div>
        <i :class="['iconfont', 'icon-menpiao-', $style.ticket]"></i>
        <span :class="$style.text">{{item.title}}</span>
      </div>
      <div :class="$style.child" v-if="item.children.length">
        <ticket :items="item.children"></ticket>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ticket',
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../../assets/style/global.scss';
  .container {
    .ticket {
      font-size: 48px;
      color:$bgcolor;
      vertical-align: middle;
    }
    .text {
      font-size: 32px;
      color: #333;
    }
    .child {
      margin-left: 20px;
    }
  }
</style>
