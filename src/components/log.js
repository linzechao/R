import React from 'react'
import { List } from 'antd-mobile'

import PropTypes from 'prop-types'

const Item = List.Item
const Brief = Item.Brief

function Log ({data}) {
  return (
    <List>
      {data.map((item, index) =>
      <Item key={index} extra={item.status ? '成功'
        : <span style={{color: 'red'}}>失败</span>}>
          {item.name} <Brief>{item.date}</Brief>
        </Item>
      )}
    </List>
  )
}

Log.propTypes = {
  data: PropTypes.array
}

export default Log
