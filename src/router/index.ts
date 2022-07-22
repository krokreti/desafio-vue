import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetalhado from '../components/posts/PostDetalhado.vue';
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/post/:id',
    name: 'post-detalhado',
    component: PostDetalhado
  },
  {
    path: '/perfil/:id',
    name: 'profile',
    component: Perfil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
