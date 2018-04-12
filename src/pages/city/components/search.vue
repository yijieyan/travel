<template lang="html">
  <div :class="$style.container">
    <div ref="list" :class="$style.box">
      <ul :class="$style.list" >
        <li v-for="(item) in search" :key="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    citys: {
      type: Object
    },
    value: String
  },
  data () {
    return {
      data: ''
    }
  },
  computed: {
    search () {
      let result = []
      for (let i in this.citys) {
        let cityGroup = this.citys[i]
        cityGroup.forEach((item, index) => {
          if (this.value && (item.spell.indexOf(this.value) > -1 || item.name.indexOf(this.value) > -1)) {
            result.push(item)
          }
        })
      }
      return result
    }
  },
  mounted () {
    this.data = this.value
    this.init()
  },
  methods: {
    init () {
      let dom = this.$refs.list
      this.scroll = new BScroll(dom)
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../../assets/style/global.scss';
  .container {
    .box {
      overflow: hidden;
      height: 100vh;
      .list {
        background: #f5f5f5;
        list-style: none;
        li {
          color: #212121;
          font-size: 28px;
          height: 90px;
          line-height: 90px;
          padding-left: 20px;
          border-bottom: 1px solid #e8e8e8;
        }
      }
    }

  }
</style>
