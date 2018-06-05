import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from '_/app'
import Index from '_/index'
import Log from '_/log/index'

const router = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/index" component={Index} />
      <Route path="/log" component={Log} />
    </div>
  </Router>
)

export default router
