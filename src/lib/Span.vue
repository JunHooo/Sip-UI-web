<template>
<span :value="value">
  <slot></slot>
</span>
</template>

<script lang="ts">
export default {
name: "Span.vue",
  props:{
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
  span{
    padding: 0 15px;
    &[value="true"] {
      color: rgb(64, 158, 255)
    }
  }


</style>