<template>
  <div>
    <Nav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/Doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      padding: 0 8px;
    }
  }
}
</style>