import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import about from './about'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      home,
      about
    }
  })
}