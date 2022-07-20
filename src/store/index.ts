import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
  },
  getters: {
  },
  mutations: {
    GET_LOGGED_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    addLoggedUser(context, payload) {
      context.commit('GET_LOGGED_USER', payload)
    }
  },
  modules: {
  }
})
