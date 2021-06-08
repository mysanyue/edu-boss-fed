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
