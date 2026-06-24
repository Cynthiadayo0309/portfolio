import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Lang from '@/views/Lang.vue'
import About from '@/views/About.vue'
import Works from '@/views/Works.vue'
import Skill from '@/views/Skill.vue'

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
          },
          desc: {
            ja: '青木孝輔のポートフォリオ。データ分析アプリケーション、クラウドインフラ、運用改善、生成AI活用の経験を紹介します。',
            en: 'Kosuke Aoki portfolio showcasing experience in data analysis applications, cloud infrastructure, operations improvement, and generative AI.'
          },
        }
      },
      {
        path: 'home',
        component: Home,
        meta: {
          title: {
            ja: 'ポートフォリオ | ホーム',
            en: 'Portfolio | Home'
          },
          desc: {
            ja: '青木孝輔のポートフォリオ。データ分析アプリケーション、クラウドインフラ、運用改善、生成AI活用の経験を紹介します。',
            en: 'Kosuke Aoki portfolio showcasing experience in data analysis applications, cloud infrastructure, operations improvement, and generative AI.'
          },
        }
      },
      {
        path: 'about',
        component: About,
        meta: {
          title: {
            ja: 'ポートフォリオ | 私について',
            en: 'Portfolio | About'
          },
          desc: {
            ja: '青木孝輔のプロフィール。アプリケーション開発、インフラ運用、情報セキュリティに関する職歴と学習背景を紹介します。',
            en: 'Profile of Kosuke Aoki, including experience in application development, infrastructure operations, information security, and academic background.'
          },
        }
      },
      {
        path: 'works',
        component: Works,
        meta: {
          title: {
            ja: 'ポートフォリオ | 実績',
            en: 'Portfolio | Works'
          },
          desc: {
            ja: 'データ分析アプリケーション、金融系クラウドインフラ、OS移行、宿泊業向けWebアプリケーション開発の実績を公開向けに要約しています。',
            en: 'Selected public-facing work across data analysis applications, financial cloud infrastructure, OS migration, and hospitality web application development.'
          },
        }
      },
      {
        path: 'skill',
        component: Skill,
        meta: {
          title: {
            ja: 'ポートフォリオ | スキル',
            en: 'Portfolio | Skill'
          },
          desc: {
            ja: 'アプリケーション開発、クラウド・インフラ、DevOps、セキュリティ、業務ツールに関する技術スタックを紹介します。',
            en: 'Technology stack covering application development, cloud infrastructure, DevOps, security, and business tools.'
          },
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
