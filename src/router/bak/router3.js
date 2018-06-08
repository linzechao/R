import React from 'react'
import { combineReducers, createStore } from 'redux'

import user, { user as typeUser } from './actionTypes3'
/* import user from './actionTypes'
const typeUser = user.typeUser
console.log(user)
*/

import * as reducers from './reducers3'
/*
const login = (state = 0, active) => {
  if (active.type === typeUser.LOGIN) {
    return 1
  }
  return state
}

const intitle = (state = 'baby', active) => {
  if (active.type === typeUser.INTITLE) {
    return active.name
  }
  return state
}
*/

const reducer = combineReducers(reducers)
const store = createStore(reducer)
/*
const store = createStore((state = {}, active) => {
  return {
    login: login(state.isLogin, active),
    name: intitle(state.intitle, active)
  }
})
*/

const RouterDOM = () => {
  console.log(store.getState())

  return (
    <div>gggg</div>
  )
}

store.subscribe(() => {
  console.log(store.getState())
})

setTimeout(() => {
  store.dispatch({
    type: typeUser.INTITLE,
    name: 'Super'
  })

  store.dispatch({
    type: typeUser.LOGIN
  })

  store.dispatch({
    type: typeUser.INTITLE,
    name: 'bb'
  })
}, 0)

export default RouterDOM
