const Mock = require('mockjs')

const proxy = {
  [`GET /api/list`]: (req, res) => {
    return res.json({
      ...Mock.mock({
        'status|0-1': 1,
        'list|10': [
          {
            'id|10-100': 34,
            title: '@ctitle(6, 20)',
            subtitle: '@date',
            'extra|1': true
          }
        ],
        page: {
          'p|+1': 1,
          'count|192-491': 100
        },
        message: function () {
          return this.status ? 'get success...' : 'get failure...'
        }
      })
    })
  }
}

module.exports = proxy
