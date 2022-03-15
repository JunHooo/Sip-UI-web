<demo>
  文字按钮
</demo>
<template>
  <Button theme="text">文字按钮</Button>
  <Button theme="text" :disable="true">文字按钮</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  components: {
    Button,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>