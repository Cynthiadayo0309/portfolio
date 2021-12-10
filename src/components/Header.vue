<template>
  <div>
    <v-app-bar app color="#009DAE" class="logo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title style="margin-left: 9%">
        <router-link to="/">AØKØU</router-link>
      </v-toolbar-title>
      <v-tabs id="nav" color="#FFFFFF">
        <v-tab><router-link to="home">Home</router-link></v-tab>
        <v-tab><router-link to="about">About</router-link></v-tab>
        <v-tab><router-link to="skill">Skill</router-link></v-tab>
        <v-tab><router-link to="blog">Blog</router-link></v-tab>
        <!-- ここに日本語と英語の切り替えを入れる -->
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
          <!-- ここに日本語と英語の切り替えを入れる -->
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
};
</script>

<style lang="scss" scoped>
@import "@/styles/header.scss";

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
