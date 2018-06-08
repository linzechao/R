import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {NavBar, Icon, Drawer, List} from 'antd-mobile'

import '^/index.scss'

import Page1 from '_/page1'
import Page2 from '_/page2'
import Page3 from '_/page3'

/*
import {createStore} from 'redux'

// Store
const store = createStore(reducer)
// let { subscribe, dispatch, getState } = store

// Action
const ADD_TODO = '添加 TODO'
function addTodo (text) {
  return {
    type: ADD_TODO,
    text
  }
}
const action = addTodo('Learn Redux')

// Dispatch
store.dispatch(action)

// Reducer
function reducer (state, action) {
  return 'new state'
}

// Subscribe
const unsubscribe = store.subscribe(listener)
function listener () {
}
// 解除监听
unsubscribe()
*/

const sidebar = (
  <List>
    <List.Item
      thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    ><Link to="/">Page1</Link></List.Item>
    <List.Item
      thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    ><Link to="/page2">Page2</Link></List.Item>
    <List.Item
      thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    ><Link to="/page">Page3</Link></List.Item>
  </List>
)

const RouterDOM = () => {
  let open = false

  const onOpenChange = (...args) => {
    open = args[0]
  }

  return (
    <Router>
      <div>
        <NavBar
          icon={<Icon type="ellipsis" />}
          onLeftClick={onOpenChange}>M3 商学院</NavBar>

        <Drawer
          className="my-drawer"
          style={{
            minHeight: document.documentElement.clientHeight
          }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={open}
          onOpenChange={onOpenChange}>

          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
            <li>
              <Link to="/page3">Page3</Link>
            </li>
          </ul>

          <Route exact path="/" component={Page1} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Drawer>
      </div>
    </Router>
  )
}

export default RouterDOM
