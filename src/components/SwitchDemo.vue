<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
  <h1>属性</h1>
  <table>
    <thead>
    <tr>
      <th align="left">参数</th>
      <th align="left">说明</th>
      <th align="left">类型</th>
      <th align="left">可选值</th>
      <th align="left">默认值<tr>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>value</td>
      <td>绑定值</td>
      <td>boolean</td>
      <td>——</td>
      <td>——</td>
    </tr>
    </tbody>
  </table>
  <p>下一节 ： <router-link to="/doc/dialog">Dialog组件</router-link></p>
  <p>上一节 ： <router-link to="/doc/button">Button组件</router-link></p>


</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from './Demo.vue'
import {ref} from 'vue';

export default {
  components: {
    Button,
    Demo
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      Switch1Demo,
      Switch2Demo,
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
p{
  margin-top: 16px;
  a{
    color:rgb(9, 129, 229)
  }
}
h1{
  padding:20px 0;
}
table{
  border-collapse: collapse;
  font-size: 14px;
  tr{
    border-bottom: 1px solid #dcdfe6;
  }
  th{
    font-weight: 400;
    color: rgb(144, 147, 153);
    padding-right: 100px;
    padding-bottom: 20px;
  }
  td {
    padding: 30px 90px 30px 0;
    color: #606266
  }
}
</style>