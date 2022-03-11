<template>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup(){
    const onclick=()=>{
      console.log("hi")
    }
    const onmouseover=()=>{
      console.log('hi2');
    }
    return {onclick,onmouseover}
  }
};
</script>

<style lang="scss" scoped>

</style>