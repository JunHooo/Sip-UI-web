<!--<template>-->
<!--  <div>Dialog 示例</div>-->
<!--  <h1>示例1</h1>-->
<!--  <Button @click="toggle">toggle</Button>-->
<!--  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">-->
<!--    <template v-slot:content>-->
<!--      <strong>hi</strong>-->
<!--      <div>hi2</div>-->
<!--    </template>-->
<!--    <template v-slot:title>-->
<!--      <strong>加粗的标题</strong>-->
<!--    </template>-->
<!--  </Dialog>-->
<!--  <h1>示例2</h1>-->
<!--  <Button @click="showDialog">show</Button>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import Dialog from '../lib/Dialog.vue';-->
<!--import Button from '../lib/Button.vue';-->
<!--import {ref, h} from 'vue';-->
<!--import {openDialog} from '../lib/openDialog';-->

<!--export default {-->
<!--  components: {-->
<!--    Dialog,-->
<!--    Button-->
<!--  },-->
<!--  setup() {-->
<!--    const x = ref(false);-->
<!--    const toggle = () => {-->
<!--      x.value = !x.value;-->
<!--    };-->
<!--    const f1 = () => {-->
<!--      return false;-->
<!--    };-->
<!--    const f2 = () => {-->
<!--    };-->
<!--    const showDialog = () => {-->
<!--      openDialog({-->
<!--        title: h('strong', {}, '标题'),-->
<!--        content: '你好',-->
<!--        ok() {-->
<!--          console.log('ok');-->
<!--        },-->
<!--        cancel() {-->
<!--          console.log('cancel');-->
<!--        }-->
<!--      });-->
<!--    };-->
<!--    return {x, toggle, f1, f2, showDialog};-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <div>
    <h1>Dialog 组件示例 </h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
  <p>下一节 ： <router-link to="/doc/tabs">Tabs组件</router-link></p>
  <p>上一节 ： <router-link to="/doc/button">Button组件</router-link></p>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Demo from './Demo.vue'
import {ref} from 'vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
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
  margin-bottom: 16px;
  a{
    color:rgb(9, 129, 229)
  }
}
</style>