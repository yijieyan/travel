<template lang="html">
  <div :class="$style.city">
    <City-header @change="handleChangeValue"></City-header>
    <City-search :citys="citys" :value="value" v-show="showSearch"></City-search>
    <div v-show="!showSearch">
      <City-list
          :currentCity="getCity"
          :hotCities="hotCities"
          :citys="citys"
          :keyword="keyword"
      >
      </City-list>
      <City-sliderBar :citys="citys" @change="handleChange" ></City-sliderBar>
    </div>
  </div>
</template>

<script>
import http from '../../services/APIServer'
import CityHeader from './components/header.vue'
import CityList from './components/list.vue'
import CitySliderBar from './components/sliderBar.vue'
import CitySearch from './components/search.vue'
export default {
  components: {
    CityHeader,
    CityList,
    CitySliderBar,
    CitySearch
  },
  data () {
    return {
      hotCities: [],
      citys: {},
      keyword: '',
      value: ''
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    showSearch () {
      return this.value ? 1 : 0
    },
    getCity () {
      return this.$store.state.city
    }
  },
  methods: {
    async init () {
      let res = await http.get('/static/city.json')
      if (res.ret === true) {
        this.hotCities = res.data.hotCities
        this.citys = res.data.cities
      } else {
        alert('网络出错')
      }
    },
    handleChange (keyword) {
      this.keyword = keyword
    },
    handleChangeValue (value) {
      this.value = value
    }
  }
}
</script>

<style lang="scss" module>
  .city {
    background: #f5f5f5;
    overflow: hidden;
    height: 100vh;
  }
</style>
