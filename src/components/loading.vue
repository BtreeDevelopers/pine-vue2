<template>
  <div class="loader">
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle class="loader-bg" cx="50" cy="50" r="20"></circle>
      <circle class="loader-path" cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<script>
import { getValueWithUnit, getColor } from "@/mixins/utils";
export default {
  name: "pine-loading",
  props: {
    size: {
      default: 60,
      type: [Number, String],
    },
    weight: {
      default: 4,
      type: [Number, String],
    },
    color: {
      default: "primary",
      type: String,
    },
    backgroundColor: {
      default: "card",
      type: String,
    },
  },
  computed: {
    sizeCmp() {
      return getValueWithUnit(this.size);
    },
    weightCmp() {
      return getValueWithUnit(this.weight);
    },
    colorCmp() {
      return getColor(this.color);
    },
    backgroundColorCmp() {
      return getColor(this.backgroundColor);
    },
  },
};
</script>

<style lang="scss">
:root {
  --rotation-animation-speed: 2s;
  --rotation-animation-easing: linear;
  --stroke-animation-speed: 1.5s;
  --stroke-animation-easing: ease-in-out;
  --stroke-start-dasharray: 1, 200;
  --stroke-end-dasharray: 89, 200;
}

.loader {
  width: v-bind(sizeCmp);
  height: v-bind(sizeCmp);
}

.circular-loader {
  animation: rotate var(--rotation-animation-speed)
    var(--rotation-animation-easing) infinite;
}
.loader-bg {
  fill: none;
  stroke-width: v-bind(weightCmp);
  stroke-linecap: round;
  stroke: v-bind(backgroundColorCmp);
}
.loader-path {
  fill: none;
  stroke-width: v-bind(weightCmp);
  animation: animate-stroke var(--stroke-animation-speed)
    var(--stroke-animation-easing) infinite;
  stroke-linecap: round;
  stroke: v-bind(colorCmp);
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-stroke {
  0% {
    stroke-dasharray: var(--stroke-start-dasharray);
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: var(--stroke-end-dasharray);
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: var(--stroke-end-dasharray);
    stroke-dashoffset: -124;
  }
}
</style>
