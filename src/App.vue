<template>
  <div id="app">
    <p-app>
      <p-input v-model="value" />
      <p-icon :name="value" />
      <p class="primary">{{ $pine.dark }}</p>
      <p-theme-toggle v-model="theme" />
    </p-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    value: "activity",
    theme: false,
  }),
  created() {
    console.log(this.$pine);
  },
  watch: {
    theme(v) {
      this.$pine.dark = v;
    },
  },
};
</script>
