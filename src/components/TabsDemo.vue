<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo"/>
  <p>上一节 ：
    <router-link to="/doc/button">Button组件</router-link>
  </p>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
    };
  }
};
</script>
<style lang="scss">
p {
  a {
    color: rgb(9, 129, 229)
  }
}
</style>
