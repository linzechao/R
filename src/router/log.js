import React from 'react'

import { NavBar, Button, WingBlank, WhiteSpace } from 'antd-mobile'

import LogList from '@/log'

const LogData = [
  {name: '色彩搭配', status: 1, date: '2018-02-02 11:00'},
  {name: '控件设计', status: 0, date: '2018-02-01 13:00'},
  {name: '软件使用', status: 1, date: '2018-01-01 14:00'},
  {name: '材料知识', status: 0, date: '2018-01-15 16:00'}
]

class Log extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      data: [
        ...LogData
      ]
    }

    this.toggleBtn = this.toggleBtn.bind(this)
  }

  toggleBtn () {
    this.setState({loading: true})
    setTimeout(() => {
      // 这里合并 setState 有问题
      this.setState((prevState, props) => {
        data: [...prevState.data.push(LogData[Math.floor(Math.random() * 4)])]
      })
      this.setState({loading: false})
    }, 2000)
  }

  render () {
    return (
      <React.Fragment>
        <NavBar>成长通关记录</NavBar>
        <LogList data={this.state.data} />
        {this.props.children}
        <WhiteSpace/>
        <WingBlank>
          <Button
            onClick={this.toggleBtn}
            disabled={this.state.loading}
            loading={this.state.loading}
            type="ghost">加载</Button>
        </WingBlank>
      </React.Fragment>
    )
  }
}

export default Log
