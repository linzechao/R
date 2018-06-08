import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import Page4 from '_/page4'
import Page5 from '_/page5'

const NoMatch = () => {
  return <div>404, not found.</div>
}

// 这个属性有点 low
// basename="/3/4/5"
const RouterDOM = () => {
  return (
    <Router
      keyLength={1}>
      <div>
        <ul>
          <li>
            <Link to="/">Page3</Link>
          </li>
          <li>
            <Link to="/page4">Page4</Link>
          </li>
          <li>
            <NavLink to="/piaoliang"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>piaoliang</NavLink>
          </li>
          <li>
            <Link to="/page5555">push Redirect</Link>
          </li>
          <li>
            <Link to="/page5" replace>replace 替换记录，被加了 push 回不去了。</Link>
          </li>
          <li>
            <Link to="/page">page</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" render={() => <div>Render Page3</div>} />
          <Route path="/page4" component={Page4} />
          <Route path="/page5" component={Page5} />
          <Redirect from="/page5555" to="/page5" push />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default RouterDOM
