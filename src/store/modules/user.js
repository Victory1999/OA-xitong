
import { loginAPI } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = ''
    removeToken()
  }
}

const actions = {
  async loginActions({ commit }, value) {
    try {
      const res = await loginAPI(value)
      commit('setToken', res.data)
      return res
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

