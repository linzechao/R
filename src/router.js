import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore()

const RouterDOM = () => {
  return (
    <Provider store={store}>
    </Provider>
  )
}

export default RouterDOM
