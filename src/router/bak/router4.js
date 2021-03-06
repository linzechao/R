import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '@/reducers/4/'
import App from '%/4/App'

let store = createStore(todoApp)

store.subscribe(() => {
  console.log(store.getState())
})

const RouterDOM = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default RouterDOM
