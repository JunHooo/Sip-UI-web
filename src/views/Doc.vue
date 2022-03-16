<template>
  <div class="scroll">
  <div class="layout">
    <Nav class="nav" toggleMenuButtonVisible/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import Nav from '../components/Nav.vue';
import {inject, Ref} from 'vue';


export default {
  components: {Nav},
  setup() {

    const menuVisible = inject<Ref<boolean>>('menuVisible'); // get
    return {
      menuVisible
    };
  }
};
</script>
<style lang="scss" scoped>
.scroll{
  overflow:hidden;

}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
    margin-left: 10%;
    padding: 9% 0;
    height: 100%;
  }

  > main {
    width: 80%;
    margin-left: 14%;
    padding: 50px 50px;
  }
}

aside {
  background: #c6e8f3;
  width: 200px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  z-index: 10;

  > h2 {
    margin-bottom: 4px;
    padding: 10px 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 10px 16px;
        text-decoration: none;
      }
      > a:hover{
        color:rgb(64, 158, 255)
      }

      .router-link-active {
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>