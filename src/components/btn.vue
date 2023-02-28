<template>
  <button
    class="p-btn"
    v-on="$listeners"
    :class="[sizeCmp, typeCmp, { disabled }]"
    :disabled="disabled"
  >
    <p-loading
      v-if="loading"
      size="30"
      :color="getColor(color)"
      class="loading"
    ></p-loading>
    <slot v-else />
  </button>
</template>

<script>
import { getColor, percentToHex } from "@/mixins/utils";
export default {
  name: "pine-btn",
  methods: {
    getColor,
    percentToHex,
    colorWithHex(perct) {
      return getColor(this.color) + percentToHex(perct);
    },
  },
  props: {
    loading: Boolean,
    small: Boolean,
    middle: {
      type: Boolean,
      default: true,
    },
    big: Boolean,
    color: {
      type: String,
      default: "primary",
    },
    solid: {
      type: Boolean,
      default: true,
    },
    outline: Boolean,
    text: Boolean,
    disabled: Boolean,
    icon: Boolean,
  },
  computed: {
    sizeCmp() {
      if (this.small) return "size-small";
      if (this.big) return "size-big";
      if (this.icon) return "size-icon";
      return "size-middle";
    },
    typeCmp() {
      if (this.outline) return "type-outline";
      if (this.text) return "type-text";
      return "type-solid";
    },
  },
};
</script>

<style lang="scss">
.p-btn {
  background: transparent;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  .loading {
    margin: 0 auto;
  }

  &:not(.disabled):hover {
    background: v-bind(colorWithHex(50));
  }
  &.type- {
    &outline {
      border: 3px solid;
      border-color: v-bind(getColor(color));
      color: v-bind(getColor(color));
      i svg {
        stroke: v-bind(getColor(color));
      }
      &.disabled {
        border-color: #7f7f7f;
      }
    }
    &text {
      color: v-bind(getColor(color));
      i svg {
        stroke: v-bind(getColor(color));
      }
    }
    &solid {
      background: v-bind(getColor(color));
      i svg {
        stroke: white;
      }
      &:not(.disabled):hover {
        background: v-bind(colorWithHex(50));
      }
      &.disabled {
        background: #f1f1f1;
      }
    }
  }
  &.disabled {
    cursor: initial;
    color: #7f7f7f;
    i svg {
      stroke: #7f7f7f;
    }
  }

  &.size- {
    &small {
      min-width: 100px;
      height: 32px;
      font-size: 14px;
    }
    &middle {
      min-width: 140px;
      height: 42px;
      font-size: 20px;
    }
    &big {
      min-width: 160px;
      height: 52px;
      font-size: 30px;
    }
    &icon {
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
  }
}
</style>
