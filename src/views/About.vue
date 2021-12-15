<style lang="scss">
@import '@/styles/about.scss';
</style>

<template>
  <v-main>
    <v-container py-6 px-5>
      <div class="about">
        <h1 class="text-center text-b">
          <template v-if="$route.params.lang == 'ja'">自己紹介</template>
          <template v-if="$route.params.lang == 'en'">About Me</template>
        </h1>
        <v-row justify="center" align-content="center">
          <v-col xs="7" sm="10" md="11" lg="12" offset-xl="1">
            <v-card flat class="mt-10">
              <v-card-actions class="justify-center">
                <!-- circular user profile pictures -->
                <v-avatar
                  color="grey"
                  size="230"
                  class="elevation-4 mt-n10 my-icon"
                >
                  <v-img src="@/assets/ドラパルト.jpeg" />
                </v-avatar>
              </v-card-actions>
              <v-card-title primary-title>
                <div class="headline">
                  <span class="display-1 font-weight-bold mb-1">
                    <template v-if="$route.params.lang == 'ja'">ソラウ</template>
                    <template v-if="$route.params.lang == 'en'">SØRAU</template>
                  </span>
                  <div>
                    <template v-if="$route.params.lang == 'ja'">大学生 / プログラマー</template>
                    <template v-if="$route.params.lang == 'en'">Student / Programmer</template>
                  </div>
                </div>
              </v-card-title>
              <v-card-text>
                <p class="text-center">{{ hobby }}</p>
                <p class="text-center">{{ previous }}</p>
                <p class="text-center">{{ current }}</p>
                <v-container style="height: 100%">
                  <v-row
                    align="center"
                    justify="space-around"
                    style="height: 100%"
                  >
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cynthiadayo0309">
                      <v-icon color="grey darken-3" size="70px">
                        mdi-github
                      </v-icon>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Cynthia_labo">
                      <v-icon color="blue lighten-3" size="70px">
                        mdi-twitter
                      </v-icon>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://cynthiadayo.com/">
                      <v-icon color="light-blue darken-1" size="70px">
                        mdi-wordpress
                      </v-icon>
                    </a>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      hobby: "趣味：ポケモン、欧州サッカー、ゲーム、漫画、プログラミング",
      previous: "2020年の新型コロナウイルスによる自粛期間中、プログラミングを独学して興味を持った。",
      current: "2021年の6月から都内の会社（システム開発部）へアルバイトとして勤務中。"
    }
  }
}
</script>