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
        <v-tab v-for="item in navItems" :key="item.page" :to="localizedPath(item.page)" exact>
          {{ item.label }}
        </v-tab>
        <v-tab :to="switchLanguagePath" :aria-label="languageAriaLabel" exact>
          <v-icon color="white">mdi-web</v-icon>
          <span>{{ languageTabLabel }}</span>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer class="drawer" v-model="drawer" fixed temporary>
      <v-list nav>
        <v-list-item-group>
          <v-list-item
            v-for="item in navItems"
            :key="item.page"
            :to="localizedPath(item.page)"
            exact
            @click="drawer = false"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
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
    navItems() {
      const labels = this.currentLang === 'ja'
        ? {
          home: 'ホーム',
          about: '私について',
          works: '実績',
          skill: 'スキル',
        }
        : {
          home: 'Home',
          about: 'About',
          works: 'Works',
          skill: 'Skill',
        }

      return [
        { page: 'home', label: labels.home },
        { page: 'about', label: labels.about },
        { page: 'works', label: labels.works },
        { page: 'skill', label: labels.skill },
      ]
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
