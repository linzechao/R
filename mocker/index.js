const Mock = require('mockjs')

module.exports = {
  [`GET /api/user`]: (req, res) => {
    return res.json({
      ...Mock.mock({ "id|1-9999": 50 }),
      ...Mock.mock({ "star|1-10": "★" })
    })
  }
}
