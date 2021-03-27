// 引入模块
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

// 创建实例
const app = express()

// 中间件处理post请求
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 处理GET请求
app.get('/', (req, res) => {
  res.send('API接口')
})

// 获取用户信息-处理GET请求
app.get('/getUserInfo', (req, res) => {
  const { id } = req.query

  const data = {
    code: 200,
    msg: '请求成功',
    data: {
      id: id,
      name: 'admin',
      perms: ['system:user:add', 'system:user:delete']
    }
  }
  res.send(data)
})

// 用户登录-接收POST请求
app.post('/login', (req, res) => {
  // 使用中间件处理的数据会存放到req.body中
  const { username, password } = req.body

  console.log('用户登录：', username, password)

  // jwt生成加密token，username是公文，密钥是“secret“，1小时后过期
  const token = jwt.sign({ username }, 'secret', { expiresIn: 60 * 60 * 1 })
  res.json({
    code: 200,
    msg: '登录成功',
    data: {
      token: token
    }
  })
})

// 启动服务开始监听
var server = app.listen(18080, () => {
  var port = server.address().port
  console.log('本地API接口地址→', 'http://localhost:' + port)
})
