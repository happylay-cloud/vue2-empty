# 后端接口 node.js 版本

`安装express模块`

```
npm install express -D
```

`获取post请求的参数`

```
npm install body-parser --save
```

`安装jwt库`

```
npm install jsonwebtoken -S
```

## 启动后端接口

```
node api.js
```

## 接口测试

`GET`

```
http://localhost:18080/getUserInfo?id=1
```

`POST`

```
http://localhost:18080/login

{
"username":"admin",
"password":"123456"
}
```
