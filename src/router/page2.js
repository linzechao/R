import React from 'react'

import { createStore } from 'redux'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile'

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
  render () {
    return (
      <WingBlank>
        <Button icon="up"
          onClick={() => store.dispatch({type: 'add'})}>add</Button>
        <WhiteSpace />
        <h2>{store.getState()}</h2>
        <WhiteSpace />
        <Button icon="down"
          onClick={() => store.dispatch({type: 'reduce'})}>reduce</Button>
      </WingBlank>
    )
  }
}

store.subscribe(() => {
  Page2.render()
})

export default Page2
