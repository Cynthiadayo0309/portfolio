<style lang="scss" scoped>
@import "@/styles/header.scss";

a {
  text-decoration: none;
}
</style>

<template>
  <div>
    <v-app-bar app color="#009DAE" class="logo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title style="margin-left: 9%">
        <router-link to="/">SØRAU</router-link>
      </v-toolbar-title>
      <v-tabs id="nav" color="#FFFFFF">
        <v-tab><router-link to="home">Home</router-link></v-tab>
        <v-tab><router-link to="about">About</router-link></v-tab>
        <v-tab><router-link to="skill">Skill</router-link></v-tab>
        <v-tab><router-link to="blog">Blog</router-link></v-tab>
        <v-tab>
          <template v-if="$route.params.lang == 'ja'">
            <router-link :to="en">En</router-link>
          </template>
          <template v-if="$route.params.lang == 'en'">
            <router-link :to="ja">Jp</router-link>
          </template>
        </v-tab>
        <!-- 色々と追加する予定 -->
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="drawer" fixed temporary>
      <v-list nav>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
              <router-link to="home">Home</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="about">About</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="skill">Skill</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="blog">Blog</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <template v-if="$route.params.lang == 'ja'">
                <router-link :to="en">日本語</router-link>
              </template>
              <template v-if="$route.params.lang == 'en'">
                <router-link :to="ja">English</router-link>
              </template>
            </v-list-item-title>
          </v-list-item>
          <!-- 色々と追加する予定 -->
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
    ja() {
      let pathArray = this.$route.path.split('/')
      pathArray[1] = 'ja'
      return pathArray.join('/')
    },
    en() {
      let path = this.$route.path.split('/')
      path[1] = 'en'
      return path.join('/')
    },
  },
};
</script>
