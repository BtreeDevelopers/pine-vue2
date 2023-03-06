<template>
  <div
    class="p-slider"
    @click="onSliderClick"
    @mousedown="onSliderMouseDown"
    @touchstart="onSliderMouseDown"
  >
    <div class="slider">
      <div class="all-tracks">
        <div class="track" ref="track"></div>
        <div
          class="track color-track"
          :style="{ width: inputWidth + '%' }"
          :class="{ 'transition-duration': !mouseUse }"
        ></div>
      </div>
      <div
        class="thumb"
        ref="thumb"
        :style="{ left: inputWidthTumb + '%' }"
        :class="{ 'transition-duration': !mouseUse, isActive: mouseUse }"
      ></div>
    </div>
    <input
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      disabled="disabled"
      readonly="readonly"
    />
  </div>
</template>

<script>
import { getColor } from "@/mixins/utils";
import { passiveSupported, addOnceEventListener } from "@/mixins/utils";

export default {
  name: "pine-slider",
  props: {
    color: {
      default: "primary",
    },
    value: undefined,
    min: {
      default: 0,
    },
    max: {
      default: 100,
    },
    step: {
      default: 1,
    },
  },
  data: () => ({
    left: 0,
    internalValue: 0,
    lazyValue: 0,
    oldValue: 0,
    mouseUse: false,
    mouseTimeout: -1,
  }),
  watch: {
    value: {
      handler(val) {
        if (val === this.lazyValue) return;
        const value = this.roundValue(
          Math.min(Math.max(val, this.min), this.max)
        );

        this.lazyValue = value;
      },
      immediate: true,
    },
    internalValue(val) {
      val = isNaN(val) ? this.min : val;
      const value = this.roundValue(
        Math.min(Math.max(val, this.min), this.max)
      );
      if (value === this.lazyValue) return;
      this.lazyValue = value;

      this.$emit("input", value);
    },
  },
  computed: {
    inputWidth() {
      const inputWidth =
        ((this.roundValue(this.lazyValue) - this.min) / (this.max - this.min)) *
        100;

      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    inputWidthTumb() {
      return this.inputWidth === 100 ? 99.3 : this.inputWidth;
    },
    backgroundColorInvert() {
      return this.$pine.theme === "dark" ? "white" : "black";
    },
  },
  methods: {
    getColor,
    onSliderMouseDown(e) {
      e.preventDefault();

      this.oldValue = this.internalValue;

      if (e.target?.matches(".all-tracks, .all-tracks *")) {
        this.mouseUse = true;
        const domRect = e.target.getBoundingClientRect();
        const touch = "touches" in e ? e.touches[0] : e;
        this.startOffset = touch.clientX - (domRect.left + domRect.width / 2);
      } else {
        this.startOffset = 0;
        window.clearTimeout(this.mouseTimeout);
        this.mouseTimeout = window.setTimeout(() => {
          this.mouseUse = true;
        }, 300);
      }

      const mouseUpOptions = passiveSupported
        ? { passive: true, capture: true }
        : true;
      const mouseMoveOptions = passiveSupported ? { passive: true } : false;

      const isTouchEvent = "touches" in e;

      this.onMouseMove(e);
      window.addEventListener(
        isTouchEvent ? "touchmove" : "mousemove",
        this.onMouseMove,
        mouseMoveOptions
      );
      addOnceEventListener(
        window,
        isTouchEvent ? "touchend" : "mouseup",
        this.onSliderMouseUp,
        mouseUpOptions
      );
    },

    onSliderMouseUp(e) {
      e.stopPropagation();
      window.clearTimeout(this.mouseTimeout);

      this.mouseUse = false;
      const mouseMoveOptions = passiveSupported ? { passive: true } : false;
      window.removeEventListener(
        "touchmove",
        this.onMouseMove,
        mouseMoveOptions
      );
      window.removeEventListener(
        "mousemove",
        this.onMouseMove,
        mouseMoveOptions
      );
    },
    onSliderClick(e) {
      const thumb = this.$refs.thumb;
      thumb.focus();

      this.onMouseMove(e);
    },
    onMouseMove(e) {
      if (e.type === "mousemove") {
        this.mouseUse = true;
      }
      this.internalValue = this.parseMouseMove(e);
    },
    parseMouseMove(e) {
      const start = "left";
      const length = "width";
      const click = "clientX";

      const { [start]: trackStart, [length]: trackLength } =
        this.$refs.track.getBoundingClientRect();
      const clickOffset = "touches" in e ? e.touches[0][click] : e[click];
      let clickPos =
        Math.min(
          Math.max(
            (clickOffset - trackStart - this.min) / trackLength,
            this.min
          ),
          1
        ) || 0;

      return parseFloat(0) + clickPos * (this.max - this.min);
    },
    roundValue(value) {
      const trimmedStep = this.step.toString().trim();
      const decimals =
        trimmedStep.indexOf(".") > -1
          ? trimmedStep.length - trimmedStep.indexOf(".") - 1
          : 0;
      const offset = this.min % this.step;

      const newValue =
        Math.round((value - offset) / this.step) * this.step + offset;

      return parseFloat(Math.min(newValue, this.max).toFixed(decimals));
    },
  },
};
</script>

<style lang="scss" scoped>
.p-slider {
  .slider {
    position: relative;
    height: 20px;
    margin: 0 10px;
    .transition-duration {
      transition-duration: 0.3s !important;
    }
    .track {
      position: absolute;
      background-color: v-bind(backgroundColorInvert);
      border-radius: 15px;
      height: 4px;
      width: 99%;
      top: 50%;
      transform: translateY(-50%);
    }

    .color-track {
      background-color: v-bind(getColor(color));
      transition: width 0.05s;
    }
    .thumb {
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      margin-left: -5px;
      background-color: v-bind(getColor(color));
      border-radius: 50%;
      height: 17px;
      width: 17px;
      transition: left 0.05s;
      &:hover,
      &.isActive {
        border: 3px solid v-bind(backgroundColorInvert);
        height: 14px;
        width: 14px;
      }
    }
  }
  input {
    display: none;
  }
}
</style>
