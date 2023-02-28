<template>
  <div class="p-text-field">
    <p v-if="label">{{ label }}</p>
    <input
      :type="type"
      :disabled="disabled"
      @input="(e) => $emit('input', e.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
import { getColor, getValueWithUnit } from "@/mixins/utils";
export default {
  methods: {
    getColor,
    getValueWithUnit,
  },

  props: {
    value: undefined,
    disabled: Boolean,
    label: String,
    width: {
      default: "300px",
      type: [String, Number],
    },
    type: {
      default: "text",
    },
    color: {
      default: "primary",
    },
    backgroundColor: {
      default: "card",
    },
  },
};
</script>

<style lang="scss">
.p-text-field {
  margin: 2px;
  p {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;
  }
  input {
    border: none;
    background: v-bind(getColor(backgroundColor));
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
      outline: 2px solid v-bind(getColor(color));
    }
    font-size: 24px;
    min-width: 300px;
    width: v-bind(getValueWithUnit(width));
  }
}
.dark .p-text-field input {
  color: white;
}
</style>
