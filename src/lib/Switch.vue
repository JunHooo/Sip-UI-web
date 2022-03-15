<template>
  <div class="Sip-switch-button" @click="move" :class="{'Sip-check':value}" :disabled="disabled">
    <div class="Sip-circle"></div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';

export default {
  props:{
    value:Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
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
  .Sip-switch-button{
    height: 20px;
    width: 40px;
    border-radius: 20px;
    background: rgb(255, 73, 73);
    position: relative;
    > .Sip-circle{
      background: rgb(255, 255, 255);
      height: 16px;
      width: 16px;
      border-radius: 50%;
      top:2px;
      left:2px;
      position: absolute;
      transition: left 300ms;
    }
  }
  .Sip-check{
    background: rgb(19, 206, 102);

    > .Sip-circle{
      left: 22px;
    }
  }

</style>