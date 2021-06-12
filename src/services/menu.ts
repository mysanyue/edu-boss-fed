import request from '@/utils/request'

export const createOrUpdateMenu = (params: any): any => {
  return request({
    method: 'post',
    url: '/boss/menu/saveOrUpdate',
    data: params
  })
}

export const getEditMenuInfo = (id: string | number = -1): any => {
  return request({
    method: 'get',
    url: '/boss/menu/getEditMenuInfo',
    params: { id }
  })
}

export const getAllMenus = (): any => {
  return request({
    method: 'get',
    url: '/boss/menu/getAll'
  })
}

export const deleteMenu = (id: number) => {
  return request({
    method: 'delete',
    url: `/boss/menu/${id}`
  })
}

export const getMenuNodeList = () => {
  return request({
    method: 'GET',
    url: '/boss/menu/getMenuNodeList'
  })
}

export const allocateRoleMenus = (params: any) => {
  return request({
    method: 'POST',
    url: '/boss/menu/allocateRoleMenus',
    data: params
  })
}

export const getRoleMenus = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/menu/getRoleMenus',
    params: { // axios 会把 params 转换为 key=value&key=value 的数据格式放到 url 后面(以?分割)
      roleId
    }
  })
}
