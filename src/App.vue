<template>
  <div id="app">
    <template>
      <Header/>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>
