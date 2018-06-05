import React from 'react'

import { NavBar, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <NavBar>APP</NavBar>
        <Link to="/index">index</Link>
        <Link to="/log">log</Link>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default App
