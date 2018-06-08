import React from 'react'

import { connect } from 'react-redux'

import { List } from 'antd-mobile'

const Item = List.Item
const Brief = List.Brief

const ListData = ({ data }) => {
  return (
    <List renderHeader={ () => 'Hi, man. Let\'s Go...' }>
      { data.map((item, index) =>
        <Item extra={ item.extra }>
          { item.title } <Brief>{ item.subtitle }</Brief>
        </Item>
      ) }
    </List>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

export default connect(
  mapStateToProps
)(ListData)
