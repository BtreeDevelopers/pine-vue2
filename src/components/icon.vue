<template>
  <vue-feather :type="name" :stroke="color" />
</template>

<script>
import vueFeather from "vue-feather";
import Vue from "vue";
export default {
  name: "div-component",
  components: {
    vueFeather,
  },
  props: {
    name: { type: String, required: true },
    color: {
      default: () => Vue.prototype.$pine.color,
    },
  },
};
</script>

<style scoped></style>
