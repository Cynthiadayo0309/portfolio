import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Lang from '@/views/Lang.vue'
import About from '@/views/About.vue'
import Skill from '@/views/Skill.vue'
import Blog from '@/views/Blog.vue'
import Apps from '@/views/Apps.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: Lang,
    children: [
      {
        path: '',
        redirect: 'home',
        meta: {
          title: {
            ja: 'ポートフォリオ | ホーム',
            en: 'Portfolio | Home'
          }
        }
      },
      {
        path: 'home',
        component: Home,
        meta: {
          title: {
            ja: 'ポートフォリオ | ホーム',
            en: 'Portfolio | Home'
          }
        }
      },
      {
        path: 'about',
        component: About,
        meta: {
          title: {
            ja: 'ポートフォリオ | SØRAUについて',
            en: 'Portfolio | About'
          }
        }
      },
      {
        path: 'apps',
        component: Apps,
        meta: {
          title: {
            ja: 'ポートフォリオ | アプリケーション',
            en: 'Portfolio | Apps'
          }
        }
      },
      {
        path: 'skill',
        component: Skill,
        meta: {
          title: {
            ja: 'ポートフォリオ | スキル',
            en: 'Portfolio | Skill'
          }
        }
      },
      {
        path: 'blog',
        component: Blog,
        meta: {
          title: {
            ja: 'ポートフォリオ | ブログ',
            en: 'Portfolio | Blog'
          }
        }
      },
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