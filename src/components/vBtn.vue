<style lang="scss" scoped>
//
</style>

<template>
  <v-btn
    class="vBtn"
    :class="[type, xl, lg, md, sm, xs, block, disabled, loading, fab, to, inactive]"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    xl: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    xs: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ''
    },
    inactive: {
      type: Boolean,
      default: false // trueならopacityを0.5
    }
  },
}
</script>