<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo"/>
  <h1>属性</h1>
  <table>
    <thead>
    <tr>
      <th align="left">参数</th>
      <th align="left">说明</th>
      <th align="left">类型</th>
      <th align="left">可选值</th>
      <th align="left">默认值</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>value</td>
      <td>绑定值</td>
      <td>string</td>
      <td>——</td>
      <td>——</td>
    </tr>
    </tbody>
  </table>
  <p>上一节 ：<router-link to="/doc/button">Button组件</router-link></p>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
    };
  }
};
</script>
<style lang="scss" scoped>
p {
  margin-top: 16px;
  a {
    color: rgb(9, 129, 229)
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
    padding-right: 120px;
    padding-bottom: 20px;
  }
  td {
    padding: 30px 90px 30px 0;
    color: #606266
  }
}
</style>
