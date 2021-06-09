/**
 * 资源分类请求模块
 */

import request from '@/utils/request'

export const getResourceCategories = () => {
  return request({
    method: 'get',
    url: '/boss/resource/category/getAll'
  })
}
