<demo>
 禁用状态
</demo>
<template>
  <div>
    <Button :disable="true">默认按钮</Button>
    <Button theme="primary" :disable=true>主要按钮</Button>
    <Button theme="success" :disable=true>成功按钮</Button>
    <Button theme="danger" :disable=true>危险按钮</Button>
  </div>
  <div>
    <Button theme="button-plain" :disable=true>朴素按钮</Button>
    <Button theme="primary-plain" :disable=true>主要按钮</Button>
    <Button theme="success-plain" :disable=true>成功按钮</Button>
    <Button theme="danger-plain" :disable=true>危险按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  components: {
    Button,
  },
}
</script>