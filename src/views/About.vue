<style lang="scss" scoped>
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
                  <v-img src="@/assets/Squirrels_Closeup_Snow.jpeg" />
                </v-avatar>
              </v-card-actions>
              <v-card-title primary-title>
                <div class="headline">
                  <span class="display-1 font-weight-bold mb-1">
                    <template v-if="$route.params.lang == 'ja'">うらは</template>
                    <template v-if="$route.params.lang == 'en'">URAHA</template>
                  </span>
                  <div>
                    <template v-if="$route.params.lang == 'ja'">大学生 / プログラマー</template>
                    <template v-if="$route.params.lang == 'en'">Student / Programmer</template>
                  </div>
                </div>
              </v-card-title>
              <v-card-text>
                <p class="text-center">
                  <template v-if="$route.params.lang == 'ja'">趣味：ポケモン、欧州サッカー、ゲーム、漫画、プログラミング</template>
                  <template v-if="$route.params.lang == 'en'">Hobbies: Pokémon, watching European soccer, games, manga, programming</template>
                </p>
                <p class="text-center">
                  <template v-if="$route.params.lang == 'ja'">2020年の新型コロナウイルスによる自粛期間中、新しいことに挑戦しようと思った。そこで、興味があったプログラミングを独学で学んだ。</template>
                  <template v-if="$route.params.lang == 'en'">During the self-restraint period caused by the coronavirus in 2020, I decided to try something new. So I studied programming for myself, which I was interested in.</template>
                </p>
                <p class="text-center">
                  <template v-if="$route.params.lang == 'ja'">2021年の6月から都内の会社（システム開発部）にアルバイトとして勤務中。</template>
                  <template v-if="$route.params.lang == 'en'">I have been working part-time job at a company in Tokyo (System Development Department) since June of 2021.</template>
                </p>
                <v-container style="height: 100%; margin-top: 40px">
                  <v-row
                    align="center"
                    justify="space-around"
                    style="height: 100%"
                  >
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cynthiadayo0309">
                          <v-icon color="grey darken-3" size="70px" v-bind="attrs" v-on="on">
                            mdi-github
                          </v-icon>
                        </a>
                      </template>
                      <span>GitHub</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Cynthia_labo">
                          <v-icon color="blue lighten-3" size="70px" v-bind="attrs" v-on="on">
                            mdi-twitter
                          </v-icon>
                        </a>
                      </template>
                      <span>Twitter</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a target="_blank" rel="noopener noreferrer" href="https://cynthiadayo.com/">
                          <v-icon color="light-blue darken-1" size="70px" v-bind="attrs" v-on="on">
                            mdi-wordpress
                          </v-icon>
                        </a>
                      </template>
                      <span>Blog</span>
                    </v-tooltip>
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
  //
}
</script>