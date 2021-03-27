// 引入模块
const express = require('express')
const bodyParser = require('body-parser')

// 创建实例
const app = express()

// 中间件处理post请求
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 处理GET请求
app.get('/', (req, res) => {
  res.send('API接口')
})

// 处理GET请求
app.get('/api', (req, res) => {
  const data = {
    code: 200,
    msg: '请求成功',
    data: {
      id: 1,
      name: '接口数据'
    }
  }
  res.send(data)
})

// 接收GET请求
app.get('/login', (req, res) => {
  const { username, password } = req.query
  res.send(`用户名：${username}，密码：${password}`)
})

// 接收POST请求
app.post('/login', (req, res) => {
  // 使用中间件处理的数据会存放到req.body中
  console.log(req.body)
  res.send(req.body)
})

// 启动服务开始监听
var server = app.listen(18080, () => {
  var port = server.address().port
  console.log('本地API接口地址→', 'http://localhost:' + port)
})
