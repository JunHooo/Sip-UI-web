<demo>
基础用法
</demo>
<template>
  <div>
    <Button>默认按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="button-plain">朴素按钮</Button>
    <Button theme="primary-plain">主要按钮</Button>
    <Button theme="success-plain">成功按钮</Button>
    <Button theme="danger-plain">危险按钮</Button>
  </div>
  <div>
    <Button theme="button" :round=true>圆角按钮</Button>
    <Button theme="primary" :round=true>圆角按钮</Button>
    <Button theme="success" :round=true>圆角按钮</Button>
    <Button theme="danger" :round=true>圆角按钮</Button>
  </div>
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