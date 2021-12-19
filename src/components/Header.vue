<style lang="scss" scoped>
@import "@/styles/header.scss";

a {
  text-decoration: none;
}

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
          <v-img src="@/assets/ドラパルト.jpeg" />
        </v-avatar>
        <router-link to="/">URAHA'S PORTFOLIO</router-link>
      </v-toolbar-title>
      <v-tabs id="nav" color="#FFFFFF">
        <v-tab><router-link to="home">Home</router-link></v-tab>
        <v-tab><router-link to="about">About</router-link></v-tab>
        <v-tab><router-link to="apps">Apps</router-link></v-tab>
        <v-tab><router-link to="skill">Skill</router-link></v-tab>
        <v-tab><router-link to="blog">Blog</router-link></v-tab>
        <v-tab>
          <v-icon color="white">mdi-web</v-icon>
          <template v-if="$route.params.lang == 'ja'">
            <router-link :to="en">ja</router-link>
          </template>
          <template v-if="$route.params.lang == 'en'">
            <router-link :to="ja">en</router-link>
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
              <router-link to="apps">Apps</router-link>
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
              <v-icon class="web" style="color: #009DAE;">mdi-web</v-icon>
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
