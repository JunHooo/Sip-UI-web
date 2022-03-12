<template>
    <button class="Sip-button" :class="classes" :onclick="onClick">
      <span v-if="loading" class="Sip-loadingIndicator"></span>
      <slot></slot>
    </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  inheritAttrs: false,
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal',
    },
    round: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props,context) {
    const {theme, size, round, disable} = props;
    const {onClick} =context.attrs
    const classes = computed(() => {
      return {
        [`Sip-theme-${theme}`]: theme,
        [`Sip-size-${size}`]: size,
        [`Sip-round-${round}`]: round,
        [`Sip-disable-${disable}`]: disable,
      };
    });
    return {classes,onClick};
  }
};
</script>

<style lang="scss">
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.Sip-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 20px;
  margin: 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
    background: rgb(236, 245, 255);
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.Sip-disable-true {
    border: 1px solid rgb(220, 223, 230);
    cursor: not-allowed;
    color: rgb(220, 207, 204);
    background: white;
    &:hover,
    &:focus {
      color: rgb(220, 207, 204);
      background: white;
    }
  }

  &.Sip-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.Sip-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.Sip-theme-primary {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: rgb(102, 177, 255);

    &:hover,
    &:focus {
      background: rgb(58, 142, 230);
    }
    &.Sip-disable-true {
      cursor: not-allowed;
      background: rgb(160, 207, 255);
      &:hover,
      &:focus {
        color: white;
        background: rgb(160, 207, 255)
      }
    }
  }

  &.Sip-theme-success {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: rgb(133, 206, 97);

    &:hover,
    &:focus {
      background: rgb(93, 175, 52);
    }

    &.Sip-disable-true {
      cursor: not-allowed;
      background: rgb(179, 225, 157);
      border: none;
      &:hover,
      &:focus {
        color: white;
        background: rgb(179, 225, 157)
      }
    }
  }

  &.Sip-theme-danger {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: rgb(247, 137, 137);

    &:hover,
    &:focus {
      background: rgb(221, 97, 97);
    }

    &.Sip-disable-true {
      cursor: not-allowed;
      background: rgb(250, 182, 182);
      &:hover,
      &:focus {
        color: white;
        background: rgb(250, 182, 182)
      }
    }
  }

  &.Sip-theme-button-plain {
    &:hover,
    &:focus {
      background: white;
      color: rgb(58, 142, 230);
    }
    &.Sip-disable-true {
      border: 1px solid rgb(220, 223, 230);
      cursor: not-allowed;
      color: rgb(220, 207, 204);
      background: white;
      &:hover,
      &:focus {
        color: rgb(220, 207, 204);
        background: white;
      }
    }
  }

  &.Sip-theme-primary-plain {
    border-color: transparent;
    box-shadow: none;
    color: rgb(58, 142, 230);
    background: rgb(236, 245, 255);

    &:hover,
    &:focus {
      background: rgb(58, 142, 230);
      color: white;
    }
    &.Sip-disable-true {
      border: 1px solid rgb(220, 223, 230);
      color: rgb(58, 142, 230);
      cursor: not-allowed;
      background: rgb(236, 245, 255);
      &:hover,
      &:focus {
        color: rgb(58, 142, 230);
        background: rgb(236, 245, 255)
      }
    }
  }

  &.Sip-theme-success-plain {
    border-color: transparent;
    box-shadow: none;
    color: rgb(93, 175, 52);
    background: rgb(240, 249, 235);

    &:hover,
    &:focus {
      color: white;
      background: rgb(93, 175, 52);
    }
    &.Sip-disable-true {
      border: 1px solid rgb(220, 223, 230);
      color: rgb(93, 175, 52);
      cursor: not-allowed;
      background: rgb(240, 249, 235);
      &:hover,
      &:focus {
        color: rgb(93, 175, 52);
        background: rgb(240, 249, 235)
      }
    }
  }

  &.Sip-theme-danger-plain {
    border-color: transparent;
    box-shadow: none;
    color: rgb(221, 97, 97);
    background: rgb(254, 240, 240);

    &:hover,
    &:focus {
      background: rgb(221, 97, 97);
      color: white;
    }
    &.Sip-disable-true {
      border: 1px solid rgb(220, 223, 230);
      color: rgb(221, 97, 97);
      cursor: not-allowed;
      background: rgb(254, 240, 240);
      &:hover,
      &:focus {
        color: rgb(221, 97, 97);
        background: rgb(254, 240, 240)
      }
    }
  }

  &.Sip-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.Sip-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.Sip-round-true {
    border-radius: 20px;
  }

  > .Sip-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: Sip-spin 1s infinite linear;
  }
}
@keyframes Sip-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}

}
</style>