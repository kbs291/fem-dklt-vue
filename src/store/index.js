import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    figures: {},
  },
  getters: {
    getTopInfo(state) {
      return state.figures.topInfo
    },
    getOverviews(state) {
      return state.figures.overviews
    },
  },
  mutations: {
    getFigures(state, payload) {
      state.figures = payload
    },
  },
  actions: {
    getFigures({ commit }) {
      axios('/static/figures.json').then((resp) => {
        commit('getFigures', resp.data)
      })
    },
  },
  modules: {},
})
