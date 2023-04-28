<template>
  <p-app>
    <nav>
      <p-theme-toggle v-model="theme" />
      <router-link to="/button">Button</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/textfield">Textfield</router-link> |
      <router-link to="/loading">Loading</router-link> |
      <router-link to="/modal">Modal</router-link> |
      <router-link to="/icon">Icon</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/slider">Slider</router-link> |
    </nav>
    <router-view />
  </p-app>
</template>
<script>
export default {
  mounted() {
    const getCor = localStorage.getItem("tema-pine" || "light");
    this.$pine.theme = getCor;
    this.theme = getCor === "dark";
  },
  data: () => ({
    theme: true,
  }),
  watch: {
    theme(v) {
      localStorage.setItem("tema-pine", v ? "dark" : "light");
      this.$pine.theme = v ? "dark" : "light";
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
