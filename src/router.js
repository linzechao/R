import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '@/reducers/6/'

import App from '%/6/App'

const store = createStore(reducers)

store.subscribe(() => {
  store.getState()
})

const RouterDOM = () => {
  return (
    <Provider store={ store }>
      <App></App>
    </Provider>
  )
}

export default RouterDOM
