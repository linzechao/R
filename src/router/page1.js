import React from 'react'

import { createStore } from 'redux'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Page1 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 0
    }

    this.add = this.add.bind(this)
    this.reduce = this.reduce.bind(this)
  }

  add () {
    this.setState(prevState => ({
      value: prevState.value + 1
    }))
  }

  reduce () {
    this.setState(prevState => ({
      value: prevState.value - 1
    }))
  }

  render () {
    return (
      <WingBlank>
        <Button icon="up" onClick={this.add}>add</Button>
        <WhiteSpace />
        <h2>{this.state.value}</h2>
        <WhiteSpace />
        <Button icon="down" onClick={this.reduce}>reduce</Button>
      </WingBlank>
    )
  }
}

export default Page1
