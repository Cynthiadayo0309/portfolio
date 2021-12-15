<style lang="scss">
@import '@/styles/index.scss';
@import '@/styles/home.scss';
</style>

<template>
  <v-main id="home-bg">
    <v-container>
      <div class="home-content">
        <p class="home-title">Welcom to My Portfolio.</p>
        <div class="btn-posi">
          <router-link to="about">
            <v-btn color="#009DAE">Profile</v-btn>
          </router-link>
        </div>
      </div>
    </v-container>
    <!-- Scott Webb写真の持ち主の名前を入れる -->
  </v-main>
</template>

<script>
export default {
  //
}
</script> 