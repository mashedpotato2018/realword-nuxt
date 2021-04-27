/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-26 19:55:16
 */
import { request } from '@/plugins/request'

/**
 * 登录
 * @param {*} data 
 */
export const login = (data) => {
    return request({
        url: '/api/users/login',
        method: 'post',
        data
    })
}

/**
 * 注册
 * @param {*} data 
 */
export const register = (data) => {
    return request({
        url: '/api/users',
        method: 'post',
        data
    })
}