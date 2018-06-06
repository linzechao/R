import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

import { NavBar, WhiteSpace, Grid } from 'antd-mobile'

import Page1 from '_/page1'
import Page2 from '_/page2'
import Page3 from '_/page3'

const path = [{
  name: 'Page1',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
}, {
  name: 'Page2',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
}, {
  name: 'Page3',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
}]

function toPath (path) {
  console.log(path.name)
}

const BasicExample = () => (
  <Router>
    <div>
      <NavBar>React APP</NavBar>
      <WhiteSpace />

      <Grid data={path}
        onClick={toPath}
        columnNum={3}
        renderItem={dataItem => (
          <div style={{ padding: '12.5px' }}>
            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
              <span>{dataItem.name}</span>
            </div>
          </div>
        )}
      />

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
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </div>
  </Router>
)

export default BasicExample
