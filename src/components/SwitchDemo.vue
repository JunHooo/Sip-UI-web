<template>
  <div>
    <!--    <Switch :value="value" @update:value="value=$event"></Switch>-->
    <h1>基本用法</h1>
    <Switch v-model:value="value" ></Switch>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
name: "SwitchDemo",
  components: {Switch},
  setup(){
    let value=ref(false)
    return{value}
  }

}
</script>

<style lang="scss" scoped>
</style>