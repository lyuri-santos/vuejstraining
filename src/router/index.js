import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Conversor from './views/Conversor'
import Palheta01 from './views/palheta01'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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

const router = new VueRouter({
  routes
})

export default router
