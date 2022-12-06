<template>
  <div>
    <input @input="input" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  name: "casneto-input",
  methods: {
    input(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
