<template>
  <vue-feather :type="name" :stroke="getColor(color)" />
</template>

<script>
import vueFeather from "vue-feather";
import { getColor } from "@/mixins/utils";
export default {
  name: "div-component",
  components: {
    vueFeather,
  },
  props: {
    name: { type: String, required: true },
    color: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    getColor,
  },
};
</script>

<style scoped></style>
