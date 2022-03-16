<demo>
文字描述
</demo>
<template>
  <div class="xxx">
    <Span :value="bool">按年付费</Span>
    <Switch v-model:value="bool"/>
    <Span :value="!bool">按月付费</Span>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Span from '../lib/Span.vue';
import {ref} from 'vue';

export default {
  components: {
    Switch,
    Span
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  }
};
</script>
<style lang="scss" scoped>
  .xxx{
    display:flex;
    flex-direction: row;
  }

</style>