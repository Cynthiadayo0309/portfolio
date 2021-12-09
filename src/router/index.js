import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Lang from '@/views/Lang.vue'
import About from '@/views/About.vue'
import Skill from '@/views/Skill.vue'
import Blog from '@/views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: Lang,
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'skill',
        component: Skill,
      },
      {
        path: 'blog',
        component: Blog,
      }
    ]
  },
  {
    path: '*',
    redirect: '/ja/home',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router