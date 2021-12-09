<template>
  <header>
    <v-app-bar app color="#6A76AB" class="logo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title><router-link to="/">AOKOU</router-link></v-toolbar-title>
      <v-tabs id="nav">
        <v-tab><router-link to="home">Home</router-link></v-tab>
        <v-tab><router-link to="about">About</router-link></v-tab>
        <v-tab><router-link to="skill">Skill</router-link></v-tab>
        <v-tab><router-link to="blog">Blog</router-link></v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="drawer" fixed temporary>
      <v-list nav dense>
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
          <!-- ここに日本語と英語の切り替えを入れる -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/Header.scss";

a {
  text-decoration: none;
}

// .lang-box {
//     position: absolute;
//     bottom: 4px;
//     right: 0;
//     transform: translateY(100%);
//     display: none;
//     background: #fff;
//     border: 1px solid #dedede;
//     border-radius: 4px;
//   }

//   .lang-box li {
//     margin: 0;
//     font-size: 14px;
//   }

//   .lang-box li a {
//     display: block;
//     padding: 8px 16px;
//     box-sizing: border-box;
//     border-bottom: 1px dotted #adadad;
//   }

//   .lang-box li:last-child a {
//     border-bottom: none;
//   }
</style>
