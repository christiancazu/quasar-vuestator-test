import Vue from 'vue'

import * as types from '../types'

export const state = () => ({
  users: [],
  foo: {
    bar: 'barbar'
  }
})

export const getters = {
  userFullName: (state) => {
    return `${state.foo}`
  }
}

export const actions = {
  foo: (_, state, text) => {
    // console.warn(ctx.$state)
    state.foo = { bar: text }
  },
  login: async (ctx, state) => {
    // console.warn(ctx.$state)
    const { data } = await Vue.prototype.$axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    state.users = data
  },

  [types.TEST]: async (ctx, state) => {
    const { data } = await Vue.prototype.$axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    state.users = data
  }
}
