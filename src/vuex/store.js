import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  todoList: [],
  menuOpen: false
}

const mutations = {
  GETTODOLIST (state, data) {
    state.todoList = data
  },
  MENUOPEN (state) {
    state.menuOpen = !state.menuOpen
  }
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
