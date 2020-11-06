import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Conversor from './views/Conversor'
import Palheta01 from './views/Palheta01'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.Base_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/conversor',
      name: 'conversor',
      component: Conversor
    },
    {
      path: '/palheta01',
      name: 'palheta01',
      component: Palheta01
    }
  ]
})
