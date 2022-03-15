<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sip"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <router-link to="/Doc">文档</router-link>
    </ul>
    <span class="toggleAside" @click="toggleMenu" v-if="toggleMenuButtonVisible">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-item"></use>
        </svg>
    </span>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    svg {
      height: 32px;
      width: 32px;
    }
  }


  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color:rgb(173, 216, 230);

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    color: rgb(176, 240, 229);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;

  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>