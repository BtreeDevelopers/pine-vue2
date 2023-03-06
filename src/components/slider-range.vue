<template>
  <div
    class="p-slider-range"
    @click="onSliderClick"
    @mousedown="onSliderMouseDown"
    @touchstart="onSliderMouseDown"
  >
    <div class="slider">
      <div class="all-tracks">
        <div class="track" ref="track"></div>
        <div
          class="track color-track"
          :style="{
            width: inputWidth1 - inputWidth0 + '%',
            left: inputWidth0 + '%',
          }"
          :class="{ 'transition-duration': !mouseUse }"
        ></div>
      </div>
      <div
        class="thumb thumb0"
        ref="thumb0"
        :style="{ left: inputWidthTumb0 + '%' }"
        :class="{
          'transition-duration': !mouseUse,
          isActive: mouseUse && moveleft,
        }"
      ></div>
      <div
        class="thumb thumb1"
        ref="thumb1"
        :style="{ left: inputWidthTumb1 + '%' }"
        :class="{
          'transition-duration': !mouseUse,

          isActive: mouseUse && !moveleft,
        }"
      ></div>
    </div>
    <input :value="value" disabled="disabled" readonly="readonly" />
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
    internalValue: [0, 0],
    lazyValue: [0, 0],
    oldValue: [0, 0],
    mouseUse: false,
    mouseTimeout: -1,
    moveleft: false,
  }),
  watch: {
    value: {
      handler(val) {
        if (val === this.lazyValue) return;
        const value0 = this.roundValue(
          Math.min(Math.max(val[0], this.min), this.max)
        );
        const value1 = this.roundValue(
          Math.min(Math.max(val[1], this.min), this.max)
        );

        this.lazyValue = [value0, value1];
      },
      immediate: true,
    },
    internalValue([val, val1]) {
      val = isNaN(val) ? this.min : val;
      val1 = isNaN(val1) ? this.min : val1;
      const value = this.roundValue(
        Math.min(Math.max(val, this.min), this.max)
      );
      const value1 = this.roundValue(
        Math.min(Math.max(val1, this.min), this.max)
      );
      if (value === this.lazyValue[0] && value1 === this.lazyValue[1]) return;
      this.lazyValue = [value, value1];

      this.$emit("input", [value, value1]);
    },
  },
  computed: {
    inputWidth0() {
      const inputWidth =
        ((this.roundValue(this.lazyValue[0]) - this.min) /
          (this.max - this.min)) *
        100;

      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    inputWidth1() {
      const inputWidth =
        ((this.roundValue(this.lazyValue[1]) - this.min) /
          (this.max - this.min)) *
        100;

      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    inputWidthTumb0() {
      return this.inputWidth0 === 100 ? 99.3 : this.inputWidth0;
    },
    inputWidthTumb1() {
      return this.inputWidth1 === 100 ? 99.3 : this.inputWidth1;
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
      if (!e.target?.matches(".all-tracks, .all-tracks *")) {
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

      this.$emit("mouseup", e);
      this.$emit("end", this.internalValue);
      if (
        this.oldValue[0] !== this.internalValue[0] ||
        this.oldValue[1] !== this.internalValue[1]
      ) {
        this.$emit("change", this.internalValue);
      }

      this.isActive = false;
    },
    onSliderClick(e) {
      if (e.target?.matches(".thumb0")) {
        const thumb = this.$refs.thumb0;
        thumb.focus();
      } else {
        const thumb = this.$refs.thumb1;
        thumb.focus();
      }

      this.onMouseMove(e);
    },
    onMouseMove(e) {
      if (e.type === "mousemove") {
        this.mouseUse = true;
      }
      const newValue = this.parseMouseMove(e);
      const middle =
        (this.lazyValue[1] - this.lazyValue[0]) / 2 + this.lazyValue[0];
      this.moveleft = false;
      if (newValue <= this.lazyValue[0] || newValue <= middle) {
        this.moveleft = true;
        this.internalValue = [this.parseMouseMove(e), this.lazyValue[1]];
      } else {
        this.internalValue = [this.lazyValue[0], this.parseMouseMove(e)];
      }
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
.p-slider-range {
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
      .moveRight {
        transition: width 0.05s;
      }
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

// .p-slider {
//   -webkit-appearance: none;
//   appearance: none;
//   background-color: gray;
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
//   /* Chrome */
//   &::-webkit-slider-runnable-track {
//     background-color: red;
//     border-radius: 15px;
//     height: 5px;
//   }

//   &::-webkit-slider-thumb {
//     -webkit-appearance: none; /* Override default look */
//     appearance: none;
//     margin-top: -5.5px; /* Centers thumb on the track */
//     background-color: v-bind(getColor(color));
//     border-radius: 50%;
//     height: 17px;
//     width: 17px;
//   }
// }
// .p-slider {
//   accent-color: green;
//   color: red;
//   &::-webkit-slider-runnable-track {
//     border-radius: 15px;
//     height: 5px;
//   }
// }
</style>
