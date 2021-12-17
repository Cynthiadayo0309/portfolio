<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}

.row {
  margin: 20px 0 0 0;
}

.v-image {
  margin: 0 auto 60px auto;
}
</style>

<template>
  <v-main>
    <v-container>
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
            <template v-if="$route.params.lang == 'ja'">
              <span>{{ item.tipJa }}</span>
            </template>
            <template v-if="$route.params.lang == 'en'">
              <span>{{ item.tipEn }}</span>
            </template>
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
          tipJa: '経験年数が入ります1',
          tipEn: 'keiken year1'
        },
        {
          id: 2,
          src: require("../assets/vuetify.png"),
          name: 'Vuetify',
          tipJa: '経験年数が入ります2',
          tipEn: 'keiken year2'
        },{
          id: 3,
          src: require("../assets/javascript.png"),
          name: 'JavaScript',
          tipJa: '経験年数が入ります3',
          tipEn: 'keiken year3'
        },
        {
          id: 4,
          src: require("../assets/php.png"),
          name: 'PHP',
          tipJa: '経験年数が入ります4',
          tipEn: 'keiken year4'
        },
        {
          id: 5,
          src: require("../assets/ruby.png"),
          name: 'Ruby',
          tipJa: '経験年数が入ります5',
          tipEn: 'keiken year5'
        },
        {
          id: 6,
          src: require("../assets/rails.png"),
          name: 'Rails',
          tipJa: '経験年数が入ります6',
          tipEn: 'keiken year6'
        },
        {
          id: 7,
          src: require("../assets/github.png"),
          name: 'GitHub',
          tipJa: '経験年数が入ります7',
          tipEn: 'keiken year7'
        },
        {
          id: 8,
          src: require("../assets/heroku.png"),
          name: 'Heroku',
          tipJa: '経験年数が入ります8',
          tipEn: 'keiken year8'
        },
        {
          id: 9,
          src: require("../assets/firebase.png"),
          name: 'FireBase',
          tipJa: '経験年数が入ります9',
          tipEn: 'keiken year9'
        },
        {
          id: 10,
          src: require("../assets/docker.png"),
          name: 'Docker',
          tipJa: '経験年数が入ります10',
          tipEn: 'keiken year10'
        },
        {
          id: 11,
          src: require("../assets/photoshop.png"),
          name: 'PhotoShop',
          tipJa: '経験年数が入ります11',
          tipEn: 'keiken year11'
        },
        {
          id: 12,
          src: require("../assets/adobe-illustrator.png"),
          name: 'Illustrator',
          tipJa: '経験年数が入ります12',
          tipEn: 'keiken year12'
        },
      ]
    }
  }
}
</script>