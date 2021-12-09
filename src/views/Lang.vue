<template>
  <router-view></router-view>
</template>

<script>
export default {
  watch: {
    $route(route) {
      switch (route.params.lang) {
        case 'ja':
        case 'en':
          break
        default:
          this.$router.replace({ path: '/ja/home' })
      }
    },
  },
}
</script>