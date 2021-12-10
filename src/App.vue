<template>
  <div id="app">
    <template>
      <Header />
      <router-view></router-view>
    </template>
  </div>
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
        const setDesc = routeInstance.meta.desc
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', setDesc)
      } else {
        //ルートでdescがセットされていない場合に表示するテキスト
        document
          .querySelector("meta[name='description']")
          .setAttribute(
            'content',
            'My first portfolio'
          )
      }
    },
  },
  mounted: function () {
    var routeInstance = this.$route
    this.createTitleDesc(routeInstance)
  },
  watch: {
    $route(routeInstance, from) {
      this.createTitleDesc(routeInstance)
    },
  },
  computed: {
    isHome() {
      return this.$route.path.split('/').reverse()[0] == 'home'
    },
  },
};
</script>
