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
                    <template v-if="$route.params.lang == 'ja'">こうすけ</template>
                    <template v-if="$route.params.lang == 'en'">Kosuke</template>
                  </span>
                  <div>
                    <template v-if="$route.params.lang == 'ja'">大学生 / プログラマー</template>
                    <template v-if="$route.params.lang == 'en'">Student / Programmer</template>
                  </div>
                </div>
              </v-card-title>
              <v-card-text>
                <p class="text-center">
                  <template v-if="$route.params.lang == 'ja'">趣味：ポケモン・欧州サッカー・ゲーム・漫画・プログラミング</template>
                  <template v-if="$route.params.lang == 'en'">Hobbies: Pokémon, watching European soccer, games, manga, programming</template>
                </p>
                <p class="text-center">
                  <template v-if="$route.params.lang == 'ja'">2020年の新型コロナウイルスによる自粛期間中、新しいことに挑戦しようと思った。そこで、興味があったプログラミングを独学で学んだ。</template>
                  <template v-if="$route.params.lang == 'en'">During the self-restraint period caused by the coronavirus in 2020, I decided to try something new. So I studied programming for myself, which I was interested in.</template>
                </p>
                <p class="text-center">
                  <template v-if="$route.params.lang == 'ja'">2021年の6月から都内の会社（システム開発部）にアルバイトとして勤務している。</template>
                  <template v-if="$route.params.lang == 'en'">I have been working part-time job at a company in Tokyo (System Development Department) since June of 2021.</template>
                </p>
              </v-card-text>
              <div class="px-2">
                <v-card-title primary-title>
                  <div class="headline">
                    <div>
                      簡単な活動経歴
                    </div>
                  </div>
                </v-card-title>

                <v-timeline class="px-2" :dense="dense">
                  <v-timeline-item
                    v-for="(item, i) in items"
                    :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                    large
                  >
                    <v-card :color="item.color" dark>
                      <v-card-title class="body-1">
                        {{ item.title }}
                      </v-card-title>
                      <v-card-text class="white text--primary pt-4">
                        <p class="white text--primary">
                          {{ item.text }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </div>
              <v-card-text>
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
  data() {
    return {
      items: [
        {
          color: "green lighten-1",
          icon: "mdi-book-variant",
          title: "2020年6月",
          text: "ポケモン徹底攻略のような美しくて使いやすいサイトを自分でも作ってみたいと思い、プログラミングを始める",
          bt_display: "display:none",
        },
        {
          color: "red lighten-2",
          icon: "mdi-book-variant",
          title: "2020年7月〜11月",
          text: "HTML, CSS, JavaScriptの基礎を学び、次にRuby, Ruby on Railsを始める",
          bt_display: "display:none",
        },
        {
          color: "purple lighten-2",
          icon: "mdi-book-variant",
          title: "2021年1月〜2月",
          text: "Rails, Docker, Heroku, AWS(S3)でカフェサイトを製作し、エンジニア業界への就職を目指す",
          bt_display: "display:none",
        },
        {
          color: "blue lighten-2",
          icon: "mdi-book-variant",
          title: "2021年3月〜5月",
          text: "Vue.jsにハマり、Vue.jsでポケモン図鑑を作る",
          bt_display: "display:none",
        },
        {
          color: "teal lighten-2",
          icon: "mdi-book-variant",
          title: "2021年6月〜現在",
          text: "さらにスキルアップするために、実務未経験からアルバイトを始め、サービス作りや改修、テストを学ぶ",
          bt_display: "display:none",
        },
      ],
    }
  }
}
</script>
