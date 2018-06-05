import React from 'react'
import ReactDOM from 'react-dom'

import { NavBar, WhiteSpace } from 'antd-mobile'

class Index extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('componentDidMount()')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount()')
  }

  render () {
    return (
      <React.Fragment>
        <NavBar>首页</NavBar>
        {this.props.children}
      </React.Fragment>
    )
  }
}

/* 使用 props.children 渲染 WhiteSpace
ReactDOM.render(
  <Index title="首页">
    <WhiteSpace />
  </Index>,
  document.getElementById('root')
) 
*/

export default Index
