<template lang="html">
  <div :class="$style.container" ref="wrapper">
    <div>
      <div :class="$style.currentCity">
        <h4>当前城市</h4>
        <section :class="$style.wrapper">
          <div :class="[$style.btn]">{{currentCity}}</div>
        </section>
      </div>
      <div :class="$style.currentCity">
        <h4>热门城市</h4>
        <section :class="$style.wrapper">
          <div :class="[$style.btn]"
            v-for="(item) in hotCities"
            :key="item.id"
            @click="handleChangeCity(item.name)"
          >
            {{item.name}}
          </div>
        </section>
      </div>
      <ul :class="$style.list">
        <li v-for="(item, key) in citys" :key="key" :ref="key">
          <h4>{{key}}</h4>
          <div :class="$style.content" v-for="(city) in item"
            :key="city.id"
            @click="handleChangeCity(city.name)"
          >
            {{city.name}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    currentCity: String,
    hotCities: Array,
    citys: Object,
    keyword: String
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let wrapper = this.$refs.wrapper
      this.scroll = new BScroll(wrapper, {
        click: true
      })
    },
    handleChangeCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push({path: '/'})
    }
  },
  watch: {
    keyword () {
      let key = this.keyword
      this.scroll.scrollToElement(this.$refs[key][0])
    }
  }
}
</script>

<style lang="scss" module>
.container {
  height: 100vh;
  overflow: hidden;
  .currentCity {
    >h4 {
      height: 24px;
      padding: 24px 0 24px 20px;
      color: #212121;
      font-size: 24px;
    }
    .wrapper {
      background: #fff;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .btn {
        width: 33%;
        height: 90px;
        line-height: 90px;
        color: #212121;
        font-size: 28px;
        text-align: center;
        background: #fff;
        border: 1px solid #e8e8e8;
      }
    }
  }
  .list {
    h4 {
      height: 24px;
      padding: 24px 0 24px 20px;
      color: #212121;
      font-size: 24px;
    }
    .content {
      height: 90px;
      line-height: 90px;
      color: #212121;
      font-size: 28px;
      text-align: left;
      border-bottom: 1px solid #e8e8e8;
      padding-left: 20px;
      background: #fff;
    }
  }
}
</style>
