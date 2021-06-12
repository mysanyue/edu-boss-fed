/**
 * 角色相关请求模块
 */

import request from '@/utils/request'

export const getRoles = (params: any) => {
  return request({
    method: 'POST',
    url: '/boss/role/getRolePages',
    data: params
  })
}

export const deleteRole = (id: string | number) => {
  return request({
    method: 'DELETE',
    url: `/boss/role/${id}`
  })
}

export const createOrUpdate = (params: any) => {
  return request({
    method: 'POST',
    url: '/boss/role/saveOrUpdate',
    data: params
  })
}

export const getRoleById = (id: string | number) => {
  return request({
    method: 'GET',
    url: `/boss/role/${id}`
  })
}

export const getAllRoles = () => {
  return request({
    method: 'GET',
    url: '/boss/role/all'
  })
}

export const allocateUserRoles = (params: any) => {
  return request({
    method: 'POST',
    url: '/boss/role/allocateUserRoles',
    data: params
  })
}

export const getUserRoles = (userId: string | number) => {
  return request({
    method: 'GET',
    url: `/boss/role/user/${userId}`
  })
}
