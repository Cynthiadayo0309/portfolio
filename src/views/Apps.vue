<style lang="scss" scoped>
@import '@/styles/apps.scss';
</style>

<template>
  <v-main>
    <v-container>
      <h1 class="text-center apps">
        <template v-if="$route.params.lang == 'ja'">手掛けたアプリケーション</template>
        <template v-if="$route.params.lang == 'en'">Applications</template>
      </h1>
      <p class="text-center apps-font">
        <template v-if="$route.params.lang == 'ja'">*チーム開発は主にフロントエンドを担当</template>
        <template v-if="$route.params.lang == 'en'">Team development is mainly in charge of front-end.</template>
      </p>
      <v-layout row>
        <v-flex
          v-for="item in items"
          :key="item.id"
          xs12
          md6
        >
          <v-card class="mx-auto app-card" max-width="444" :href="item.href" target="_blank">
            <v-img
              :src="item.src"
              height="200px"
            ></v-img>

            <v-card-title>
              <template v-if="$route.params.lang == 'ja'">{{ item.titleJa }}</template>
              <template v-if="$route.params.lang == 'en'">{{ item.titleEn }}</template>
            </v-card-title>

            <v-card-subtitle>
              {{ item.subtitle }}
            </v-card-subtitle>

            <v-card-text>
              <template v-if="$route.params.lang == 'ja'">{{ item.textJa }}</template>
              <template v-if="$route.params.lang == 'en'">{{ item.textEn }}</template>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          href: '#',
          src: require("../assets/home-bg.jpeg"),
          titleJa: 'ポートフォリオ',
          titleEn: 'Portfolio',
          subtitle: 'Website',
          textJa: 'Vue.js, Vuetifyで作ったポートフォリオ',
          textEn: 'Portfolio created with Vue.js, Vuetify'
        },
        {
          id: 2,
          href: 'https://cynthiadayo.com/',
          src: require("../assets/business.jpeg"),
          titleJa: 'しあラボ',
          titleEn: 'Thia Labo',
          subtitle: 'Website',
          textJa: 'WordPressで作った個人用ブログ',
          textEn: 'A personal blog created with WordPress.'
        },
        {
          id: 3,
          href: 'https://safe-anchorage-93849.herokuapp.com/',
          src: require("../assets/cafe.jpg"),
          titleJa: 'CTD CAFE',
          titleEn: 'CTD CAFE',
          subtitle: 'Website',
          textJa: 'Rails, Docker, Heroku, AWS(S3)で作った架空のカフェサイト',
          textEn: 'An imaginary cafe site made with Rails, Docker, Heroku, AWS(S3)'
        },
        {
          id: 4,
          href: 'https://my-first-prodact.web.app/',
          src: require("https://github.com/Cynthiadayo0309/portfolio/blob/main/src/assets/pokedex.jpeg?raw=true"),
          titleJa: 'ポケモン育成メモ・図鑑',
          titleEn: 'Pokedex & Note',
          subtitle: 'Application',
          textJa: 'Vue-cli, Vuetify, Firebase, PokeAPIを使った作品',
          textEn: 'A site using Vue-cli, Vuetify, Firebase, and PokeAPI'
        },
        {
          id: 5,
          href: 'https://paradigmshift.io/index.html',
          src: require("../assets/Paradigm.svg"),
          titleJa: '株式会社パラダイムシフト',
          titleEn: 'Paradigmshift',
          subtitle: 'Website',
          textJa: 'こちらのサイトをVue.jsへ移行したものを作成',
          textEn: 'Created a migrated version of this Website to Vue.js.'
        },
        {
          id: 6,
          href: 'https://repchecker.jp/',
          src: require("../assets/logo_repchecker.png"),
          titleJa: 'RepChecker',
          titleEn: 'RepChecker',
          subtitle: 'Website',
          textJa: 'デザイナーさんのデザインを元に作成し、機能を追加・修正',
          textEn: 'Created based on the designer’s design and added or modified the functions.'
        },
        {
          id: 7,
          href: 'https://aiface.jp/',
          src: require("../assets/Aiface.svg"),
          titleJa: 'AiFace',
          titleEn: 'AiFace',
          subtitle: 'Website',
          textJa: 'トップページの修正',
          textEn: 'Fixed the top page.'
        },
        {
          id: 8,
          href: 'https://www.rc-booking.com/',
          src: require("../assets/logo_rc-booking.png"),
          titleJa: 'RcBooking',
          titleEn: 'RcBooking',
          subtitle: 'Website',
          textJa: '仮予約ページの作成・機能追加',
          textEn: 'Create and add functionality to temporary reservation pages.'
        },
        // {
        //   id: 6,
        //   src: require("../assets/ドラパルト.jpeg"),
        //   title: 'タイトル6',
        //   subtitle: 'サブタイトル6',
        //   text: 'テキスト6'
        // }
      ]
    }
  }
}
</script>
