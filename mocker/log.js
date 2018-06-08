const Mock = require('mockjs')

const data = Mock.mock({
  "string|1-10": "★"
})

const LOG = {
  'GET /api/log/list': (req, res) => {
    return res.json({
      data
    })
  }
}

module.exports = LOG
