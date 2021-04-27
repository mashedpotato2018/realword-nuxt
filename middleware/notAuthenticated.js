/*
 * @Descripttion: 验证是否登录的中间件
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-23 20:23:43
 */
export default function ({store,redirect}) {
  if(store.state.user){
    return redirect('/')
  }
}