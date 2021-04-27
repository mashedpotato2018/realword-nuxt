/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-23 19:59:37
 */
const cookieparser = process.server?require('cookieparser'):undefined;

// 在服务端渲染期间运行的都是同一个实例
// 为了防止冲突，务必要把 state 定义成一个函数，返回数据对象
export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    // nuxtServerInit 是一个特殊的action方法
    // 这个action 会在服务端渲染期间自动调用
    // 作用：初始化容器数据，传递给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let user = null

        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                
            }
            commit('setUser', user)
        }
    }
}