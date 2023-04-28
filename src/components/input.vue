<template>
  <input class="p-input" @input="input" v-bind="$attrs" />
</template>
<script>
import { getColor, getValueWithUnit } from "@/mixins/utils";
export default {
  name: "pine-input",
  props: {
    backgroundColor: {
      default: "transparent",
    },
    color: {
      default: "black",
    },
    width: {
      default: "300px",
      type: [String, Number],
    },
  },
  methods: {
    getColor,
    getValueWithUnit,
    input(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  border: none;
  background: v-bind(getColor(backgroundColor));
  background: transparent;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  caret-color: v-bind(getColor(color));
  font-weight: 400;
  color: black;
  &:focus-visible,
  &:hover {
    // outline: 2px solid v-bind(getColor(color));
    outline: none;
  }
  font-size: 24px;
  min-width: 300px;
  width: v-bind(getValueWithUnit(width));
}
</style>
