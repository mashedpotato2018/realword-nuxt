/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-26 23:14:28
 */
import { request } from '@/plugins/request'

/**
 * 获取公共文章列表
 * @param {*} params 
 */
export const getArticles = params => {
    return request({
        url: '/api/articles',
        method: 'get',
        params
    })
}

/**
 * 获取自己相关的文章列表
 * @param {*} params 
 */
export const getFeedArticles = params => {
    return request({
        url: '/api/articles/feed',
        method: 'get',
        params
    })
}

/**
 * 添加点赞
 * @param {Number} slug
 */
export const addFavorite = slug => {
    return request({
        url: `/api/articles/${slug}/favorite`,
        method: 'post'
    })
}

/**
 * 删除点赞
 * @param {Number} slug 
 */
export const deleteFavorite = slug => {
    return request({
        url: `/api/articles/${slug}/favorite`,
        method: 'delete'
    })
}
/**
 * 获取文章详情
 * @param {Number} slug 
 */
export const getArticle = slug => {
    return request({
        url: `/api/articles/${slug}`,
        method: 'get'
    })
}

/**
 * 获取评论列表
 * @param {Number} slug 
 */
export const getComments = slug => {
    return request({
        url: `/api/articles/${slug}/comments`,
        method: 'get'
    })
}
