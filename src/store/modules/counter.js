const state = {
  counter: 0
}

const getters = {
  count(state) {
    return state.counter
  }
}

const actions = {}

const mutations = {
  increment(state) {
    state.counter++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
