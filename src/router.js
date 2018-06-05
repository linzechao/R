import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '_/app'
import Index from '_/index'
import Log from '_/log'

/*
<Route component={App}>
  <Route path="index" component={Index} />
  <Route path="log" component={Log} />
</Route>
*/

const router = (
  <BrowserRouter>
    <Route path="/" component={Log} />
  </BrowserRouter>
)

export default router
