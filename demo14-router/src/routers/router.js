import {createRouter, createWebHashHistory} from "vue-router"

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/Login",
            component:Login
        }
    ]
})

// 通过路由的前置守卫校验登录
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        // 判断如果要去登录视图，直接放行即可
        next()
    }else {
        // 如果是其他任何资源，都要在登陆之后才会放行，如果没登录，则重定向到登录视图
        const username = sessionStorage.getItem("username")
        if (null != username) {
            next()
        }else {
            next("/login")
        }
    }
})

export default router