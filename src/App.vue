<template>
  <v-app>
    <template>
      <Header />
      <router-view></router-view>
    </template>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    createTitleDesc: function (routeInstance) {
      //タイトルを設定
      if (routeInstance.meta.title) {
        const lang = this.$route.params.lang || 'ja'
        const setTitle = routeInstance.meta.title[lang]
        document.title = setTitle
      } else {
        //ルートでtitleがセットされていない場合に表示するテキスト
        document.title = 'AOKOU | Portfolio'
      }

      //metaタグdescription設定
      if (routeInstance.meta.desc) {
        const lang = this.$route.params.lang || 'ja'
        const setDesc = routeInstance.meta.desc[lang] || routeInstance.meta.desc.ja
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', setDesc)
        document
          .querySelector("meta[property='og:description']")
          .setAttribute('content', setDesc)
        document
          .querySelector("meta[name='twitter:description']")
          .setAttribute('content', setDesc)
      } else {
        //ルートでdescがセットされていない場合に表示するテキスト
        const defaultDesc = 'Kosuke Aoki portfolio'
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', defaultDesc)
        document
          .querySelector("meta[property='og:description']")
          .setAttribute('content', defaultDesc)
        document
          .querySelector("meta[name='twitter:description']")
          .setAttribute('content', defaultDesc)
      }

      document
        .querySelector("meta[property='og:title']")
        .setAttribute('content', document.title)
      document
        .querySelector("meta[name='twitter:title']")
        .setAttribute('content', document.title)
    },
  },
  mounted: function () {
    var routeInstance = this.$route
    this.createTitleDesc(routeInstance)
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance)
    },
  }
};
</script>
