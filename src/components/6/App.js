import React from 'react'

import List from './List'

import { NavBar, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile'

const App = ({ loadingList, loadingNext }) => {
  return (
    <div>
      <NavBar>下拉刷新，上拉加载</NavBar>
      <WhiteSpace />
      <WingBlank>
        <Button loading={ loadingList } type="warning">重新加载</Button>
      </WingBlank>
      <WhiteSpace />
      <List></List>
      <WhiteSpace />
      <WingBlank>
        <Button loading={ loadingNext } type="ghost">下一页</Button>
      </WingBlank>
    </div>
  )
}

export default App
