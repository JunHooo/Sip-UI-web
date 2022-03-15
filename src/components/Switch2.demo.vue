<demo>
文字描述
</demo>
<template>
  <div class="dd">
    <span>按年付费</span>
    <Switch v-model:value="bool"/>
    <span>按月付费</span>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {
  ref
} from 'vue';

export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>
<style lang="scss" scoped>
  .dd{
    display:flex;
    flex-direction: row;
  }
</style>