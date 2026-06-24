<style lang="scss" scoped>
@import "@/styles/Header.scss";

.web {
  margin-left: 5px;
}
</style>

<template>
  <div>
    <v-app-bar app color="#009DAE" class="logo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title style="margin-left: 4%">
        <v-avatar class="mr-4">
          <v-img src="@/assets/Squirrels_Closeup_Snow.jpeg" alt="Kosuke Aoki portfolio avatar" />
        </v-avatar>
        <router-link :to="localizedPath('home')">KOSUKE'S PORTFOLIO</router-link>
      </v-toolbar-title>

      <v-tabs id="nav" color="#FFFFFF">
        <v-tab :to="localizedPath('home')" exact>Home</v-tab>
        <v-tab :to="localizedPath('about')" exact>About</v-tab>
        <v-tab :to="localizedPath('works')" exact>Works</v-tab>
        <v-tab :to="localizedPath('skill')" exact>Skill</v-tab>
        <v-tab :to="switchLanguagePath" :aria-label="languageAriaLabel" exact>
          <v-icon color="white">mdi-web</v-icon>
          <span>{{ languageTabLabel }}</span>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer class="drawer" v-model="drawer" fixed temporary>
      <v-list nav>
        <v-list-item-group>
          <v-list-item :to="localizedPath('home')" exact @click="drawer = false">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item :to="localizedPath('about')" exact @click="drawer = false">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item :to="localizedPath('works')" exact @click="drawer = false">
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item>
          <v-list-item :to="localizedPath('skill')" exact @click="drawer = false">
            <v-list-item-title>Skill</v-list-item-title>
          </v-list-item>
          <v-list-item :to="switchLanguagePath" exact @click="drawer = false">
            <v-list-item-title>
              {{ drawerLanguageLabel }}
              <v-icon class="web" style="color: #009DAE;">mdi-web</v-icon>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    currentLang() {
      return this.$route.params.lang === 'en' ? 'en' : 'ja'
    },
    languageTabLabel() {
      return this.currentLang === 'ja' ? 'EN' : 'JA'
    },
    languageAriaLabel() {
      return this.currentLang === 'ja' ? 'Switch language to English' : '日本語に切り替え'
    },
    drawerLanguageLabel() {
      return this.currentLang === 'ja' ? 'English' : '日本語'
    },
    switchLanguagePath() {
      const pathArray = this.$route.path.split('/')
      pathArray[1] = this.currentLang === 'ja' ? 'en' : 'ja'
      return pathArray.join('/')
    },
  },
  methods: {
    localizedPath(page) {
      return `/${this.currentLang}/${page}`
    },
  },
};
</script>
