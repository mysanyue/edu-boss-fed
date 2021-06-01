import axios from 'axios'
import store from '@/store'

const request = axios.create({

})

request.interceptors.request.use(config => {
  // 在这里通过改写 config 配置信息来实现业务功能的统一处理
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default request
