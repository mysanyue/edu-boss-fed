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

export const getAllResources = () => {
  return request({
    method: 'GET',
    url: '/boss/resource/getAll'
  })
}

export const allocateRoleResources = (params: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/allocateRoleResources',
    data: params
  })
}

export const getRoleResources = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/resource/getRoleResources',
    params: {
      roleId
    }
  })
}
