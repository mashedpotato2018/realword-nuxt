/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-25 20:11:51
 */
import { request } from '@/plugins/request'

/**
 * 获取文章标签列表
 */
export const getTags = () => {
  return request({
    url: '/api/tags',
    method: 'get'
  })
}