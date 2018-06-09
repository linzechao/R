import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavBar, WhiteSpace, WingBlank, Button } from 'antd-mobile'

import List from './List'
import { setData, setNextData } from '@/actions/6'

const App = ({ getLoading, nextLoading, getData, nextData }) => {
  return (
    <div>
      <NavBar>下拉刷新，上拉加载</NavBar>
      <WhiteSpace />
      <WingBlank>
        <Button loading={ getLoading } onClick={ getData } type="warning">重新加载</Button>
      </WingBlank>
      <WhiteSpace />
      <List></List>
      <WhiteSpace />
      <WingBlank>
        <Button loading={ nextLoading } onClick={ nextData } type="ghost">下一页</Button>
      </WingBlank>
    </div>
  )
}

App.propTyps = {
  getData: PropTypes.func.isRequired,
  nextData: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    list: state.list,
    getLoading: state.getLoading,
    nextLoading: state.nextLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      // dispatch(startGetData(true))
      fetch('api/list').then(res => res.json()).then(res => {
        dispatch(setData(res.list))
        // dispatch(startGetData(false))
      })
      return []
    },

    nextData: () => {
      fetch('api/list').then(res => res.json()).then(res => {
        dispatch(setNextData(res.list))
      })
      return []
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
