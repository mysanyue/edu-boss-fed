/**
 * 资源相关请求模块
 */

import request from '@/utils/request'

export const getResourcePages = (params: any) => {
  return request({
    method: 'post',
    url: '/boss/resource/getResourcePages',
    data: params
  })
}
