<style lang="scss">
@import '@/styles/about.scss';
</style>

<template>
  <v-main>
    <v-container>
      <div class="about">
        <v-card flat>
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