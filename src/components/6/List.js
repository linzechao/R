import React from 'react'

import { connect } from 'react-redux'

import { List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

const ListData = ({ list }) => {
  return (
    <List renderHeader={ () => 'Hi, man. Let\'s Go...' }>
      {
        list.map(({ id, extra, title, subtitle }, index) =>
          <Item key={ index } extra={ extra ? '成功' : '失败' }>
            { title } <Brief>{ subtitle }</Brief>
          </Item>
        )
      }
    </List>
  )
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

export default connect(
  mapStateToProps
)(ListData)
