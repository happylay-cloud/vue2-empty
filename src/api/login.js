import http from '@/utils/http'

// 登录请求-POST请求
export function login (username, password) {
  const data = {
    username,
    password
  }
  return http({
    url: '/login',
    method: 'post',
    data: data
  })
}

// 获取用户信息-GET请求
export function getUserinfo (query) {
  return http({
    url: '/getUserinfo',
    method: 'get',
    params: query
  })
}
