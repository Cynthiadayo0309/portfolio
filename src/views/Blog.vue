<style lang="scss">
.blog {
  margin-top: 30px;
}
.note {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <v-main>
    <v-container>
      <div class="blog">
        <v-card class="mx-auto mb-5" max-width="900" style="margin: 0 auto">
          <a
            href="https://cynthiadayo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img src="../assets/business.jpeg" max-height="500px"></v-img>
          </a>
          <div class="note">
            <v-icon color="teal lighten-2" max-width="10vw">
              mdi-post
            </v-icon>
            <v-card-subtitle>
              <template v-if="$route.params.lang == 'ja'">
                ブログを書いています。
              </template>
              <template v-if="$route.params.lang == 'en'">
                Write Blogs.
              </template>
            </v-card-subtitle>
          </div>

          <v-card-actions>
            <v-btn
              href="https://cynthiadayo.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="orange lighten-2"
              text
            >
              <template v-if="$route.params.lang == 'ja'">
                こちらから
              </template>
              <template v-if="$route.params.lang == 'en'">
                Explore
              </template>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <template v-if="$route.params.lang == 'ja'">
                  主にVue.js・趣味について書いています。
                </template>
                <template v-if="$route.params.lang =='en'">
                  I mainly write about Vue.js and hobbies.
                </template>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>