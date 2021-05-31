import request from '@/utils/request'
import qs from 'qs'

interface User {
  phone: string
  password: string
}

export const login = (params: User): any => {
  return request({
    method: 'post',
    url: '/front/user/login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },

    // 1. 如果 params 是普通对象，则 Content-Type 是 application/json
    // 2. 如果 params 是 qs.stringify(params) 转换之后的数据：key=value&key=value，则 Content-Type 会被设置为 application/x-www-form-urlencoded
    // 3. 如果 params 是 FormData 对象，则 Content-Type 是 multipart/form-data

    // 注意：axios 默认发送的是 application/json 格式的数据
    data: qs.stringify(params)
  })
}
