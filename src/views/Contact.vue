<style lang="scss" scoped>
@import '@/styles/contact.scss';
</style>

<template>
  <v-main>
    <v-container>
      <div class="contact">
        <v-card class="mx-auto mb-5" max-width="900" style="margin: 0 auto">
          <v-img src="../assets/shake_hands.jpeg" max-height="350px"></v-img>
          <div class="email">
            <v-icon color="teal lighten-2" max-width="10vw">
              mdi-email
            </v-icon>
            <v-card-subtitle>
              teyontt0309@gmail.com
            </v-card-subtitle>
          </div>
          <div class="message">
            <v-card-text>
              <v-avatar color="cyan" size="12"></v-avatar>
              <span style="margin-left: 4px">
                <template v-if="$route.params.lang == 'ja'">お気軽にお問い合わせください</template>
                <template v-if="$route.params.lang == 'en'">Please feel free to ask me</template>
              </span>
            </v-card-text>
          </div>
        </v-card>
        <v-card class="mx-auto mb-5" max-width="900" style="margin: 0 auto">
          <a
            target="_blank"
            href="https://www.wantedly.com/id/kosuke_aoki_d"
          >
            <v-img src="../assets/job.jpeg" max-height="350px"></v-img>
          </a>
          <div class="email">
            <v-icon color="teal lighten-2" max-width="10vw">
              mdi-arrow-top-right
            </v-icon>
            <v-card-subtitle>
              <a
                target="_blank"
                href="https://www.wantedly.com/id/kosuke_aoki_d"
              >
                wantedly
              </a>
            </v-card-subtitle>
          </div>
          <div class="message">
            <v-card-text>
              <v-avatar color="cyan" size="12"></v-avatar>
              <span style="margin-left: 4px">
                <template v-if="$route.params.lang == 'ja'">お気軽にお問い合わせください</template>
                <template v-if="$route.params.lang == 'en'">Please feel free to ask me</template>
              </span>
            </v-card-text>
          </div>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  //
}
</script>