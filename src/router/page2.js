import React from 'react'

import { createStore } from 'redux'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile'

import Two from './page/2.js'

// Store
const store = createStore((state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + 1

    case 'reduce':
      return state - 1

    default:
      return state
  }
})

class Page2 extends React.Component {
  add () {
    store.dispatch({type: 'add'})
  }

  reduce () {
    store.dispatch({type: 'reduce'})
  }

  render () {
    return (
      <WingBlank>
        <Button icon="up"
          onClick={this.add}>add</Button>
        <WhiteSpace />

        <Two value={store.getState()}></Two>

        <WhiteSpace />
        <Button icon="down"
          onClick={this.reduce}>reduce</Button>
      </WingBlank>
    )
  }
}

store.subscribe(() => {
  console.log(store.getState())
})

export default Page2
