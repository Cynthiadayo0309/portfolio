<style lang="scss" scoped>
@import '@/styles/skill.scss';
</style>

<template>
  <v-main>
    <v-container>
      <h1 class="text-center skill">
        <template v-if="$route.params.lang == 'ja'">スキル</template>
        <template v-if="$route.params.lang == 'en'">SKILL</template>
      </h1>
      <v-layout row>
        <v-flex
          v-for="item in items"
          :key="item.id"
          xs12
          md3
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img
                :src="item.src"
                max-height="144px"
                max-width="144px"
                v-bind="attrs"
                v-on="on"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </template>
            <span>{{ item.name }}<br/></span>
            <span>{{ item.tip }}</span>
          </v-tooltip>
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
          src: require("../assets/vue.png"),
          name: 'Vue.js',
          tip: '40%'
        },
        {
          id: 2,
          src: require("../assets/vuetify.png"),
          name: 'Vuetify',
          tip: '40%'
        },
        {
          id: 3,
          src: require("../assets/javascript.png"),
          name: 'JavaScript',
          tip: '60%'
        },
        {
          id: 4,
          src: require("../assets/php.png"),
          name: 'PHP',
          tip: '20%'
        },
        {
          id: 5,
          src: require("../assets/ruby.png"),
          name: 'Ruby',
          tip: '40%'
        },
        {
          id: 6,
          src: require("../assets/rails.png"),
          name: 'Rails',
          tip: '40%'
        },
        {
          id: 7,
          src: require("../assets/github.png"),
          name: 'GitHub',
          tip: '60%'
        },
        {
          id: 8,
          src: require("../assets/heroku.png"),
          name: 'Heroku',
          tip: '20%'
        },
        {
          id: 9,
          src: require("../assets/firebase.png"),
          name: 'FireBase',
          tip: '30%'
        },
        {
          id: 10,
          src: require("../assets/docker.png"),
          name: 'Docker',
          tip: '20%'
        },
        {
          id: 11,
          src: require("../assets/photoshop.png"),
          name: 'PhotoShop',
          tip: '40%'
        },
        {
          id: 12,
          src: require("../assets/adobe-illustrator.png"),
          name: 'Illustrator',
          tip: '30%'
        },
      ]
    }
  }
}
</script>