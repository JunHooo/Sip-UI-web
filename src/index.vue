<template>
  <div>
    <Nav></Nav>
    <div>欢迎使用SipUi</div>
    <button class="button">
      <a href="https://www.baidu.com">GitHub</a>
    </button>
    <button>起步</button>
  </div>
</template>

<script lang="ts">
import Nav from './components/Nav.vue';

export default {
  name: 'index.vue',
  components: {Nav},
};
</script>

<style lang="scss" scoped>
    button{
      height: 20px;
      width: 40px;
      border-radius:20px 0  0  20px;
    }
</style>