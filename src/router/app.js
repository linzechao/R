import React from 'react'

import { NavBar, WhiteSpace, Grid } from 'antd-mobile'

const path = [{
  name: 'index',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
}, {
  name: 'log',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
}]

class App extends React.Component {
  toPath (path) {
    console.log(path.name)
    // Router.push(`/${path}`)
  }

  render () {
    return (
      <React.Fragment>
        <NavBar>React APP</NavBar>
        <WhiteSpace />

        <Grid data={path}
          onClick={this.toPath}
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
        <WhiteSpace />
      </React.Fragment>
    )
  }
}

export default App
