/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-26 19:58:25
 */
import axios from 'axios'
// 创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取上下文对象（query,params,req,res,app,store...）
// 插件导出函数必须作为 default 成员
export default ({store}) => {

  // 请求拦截器
  request.interceptors.request.use((config) => {
    const { user } = store.state
    if(user&&user.token){
      config.headers.Authorization = `Token ${ user.token }`
    }
    return config
  }, error => {
    // 请求失败（此时请求还没有发出去）
    return Promise.reject(error)
  })
}


// 响应拦截器