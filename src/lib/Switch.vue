<template>
  <div class="button" @click="move" :class="{check:value}" >
    <div class="circle"></div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props:{
    value:Boolean
  },
  name: 'Switch',
  setup(props,context){
    const move=()=>{
       context.emit('update:value',!props.value)
    }
    return{move}
  }

};
</script>

<style lang="scss" scoped>
  .button{
    height: 20px;
    width: 40px;
    border-radius: 20px;
    background: rgb(255, 73, 73);
    position: relative;
    > .circle{
      background: rgb(255, 255, 255);
      height: 16px;
      width: 16px;
      border-radius: 50%;
      top:2px;
      left: 2px;
      position: absolute;
      transition: left 300ms;
    }
  }
  .check{
    background: rgb(19, 206, 102);

    > .circle{
      left: 21px;
    }
  }

</style>