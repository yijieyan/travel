import Vuex from 'vuex'
import Vue from 'vue'
import {setSessionStorage, getSessionStorage} from '../assets/utils'
Vue.use(Vuex)

export default () => {
  let defaultCity = getSessionStorage('travel').city || '深圳'
  let store = new Vuex.Store({
    state: {
      city: defaultCity
    },
    mutations: {
      changeCity (state, city) {
        state.city = city
        setSessionStorage('travel', {city})
      }
    }
  })
  return store
}
