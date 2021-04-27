import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a4e93276 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _1cad8b3a = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _793c246e = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _1828dd24 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1ac6acfe = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _bc86e5f0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _4a94568a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _a4e93276,
    children: [{
      path: "",
      component: _1cad8b3a,
      name: "home"
    }, {
      path: "/login",
      component: _793c246e,
      name: "login"
    }, {
      path: "/register",
      component: _793c246e,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _1828dd24,
      name: "profile"
    }, {
      path: "/settings",
      component: _1ac6acfe,
      name: "settings"
    }, {
      path: "/editor",
      component: _bc86e5f0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4a94568a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
