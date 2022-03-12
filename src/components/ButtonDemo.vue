<template>
  <h1>基础用法</h1>
  <h5>基础的按钮用法</h5>
  <div class="Sip-content">
    <Button>默认按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="danger">危险按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
  </div>
  <div class="Sip-content">
    <Button theme="button-plain">朴素按钮</Button>
    <Button theme="primary-plain">主要按钮</Button>
    <Button theme="success-plain">成功按钮</Button>
    <Button theme="danger-plain">危险按钮</Button>
    <Button theme="link-plain">链接按钮</Button>
    <Button theme="text-plain">文本按钮</Button>
  </div>
  <div class="Sip-content">
    <Button theme="button" :round=true>圆角按钮</Button>
    <Button theme="primary" :round=true>主要按钮</Button>
    <Button theme="success" :round=true>成功按钮</Button>
    <Button theme="danger" :round=true>危险按钮</Button>
    <Button theme="link" :round=true>链接按钮</Button>
    <Button theme="text" :round=true>文本按钮</Button>
  </div>
  <h1>禁用状态</h1>
  <h5>按钮不可用状态</h5>
  <div class="Sip-content one">
    <Button :disable=true>默认按钮</Button>
    <Button theme="primary" :disable=true>主要按钮</Button>
    <Button theme="success" :disable=true>成功按钮</Button>
    <Button theme="danger" :disable=true>危险按钮</Button>
    <Button theme="link" :disable=true>链接按钮</Button>
    <Button theme="text" :disable=true>文本按钮</Button>
  </div>
  <div class="Sip-content one">
    <Button theme="button-plain" :disable=true>朴素按钮</Button>
    <Button theme="primary-plain" :disable=true>主要按钮</Button>
    <Button theme="success-plain" :disable=true>成功按钮</Button>
    <Button theme="danger-plain" :disable=true>危险按钮</Button>
    <Button theme="link-plain" :disable=true>链接按钮</Button>
    <Button theme="text-plain" :disable=true>文本按钮</Button>
  </div>
  <h1>示例2</h1>
  <div class="Sip-content">
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div class="Sip-content">
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div class="Sip-content">
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
}
</script>

<style lang="scss" >
.Sip-content {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border: 1px solid rgb(220, 223, 230);

}
  .one {
  background: white;
  border: 1px solid rgb(220, 223, 230);

}
</style>