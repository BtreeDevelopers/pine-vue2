<template>
  <div id="pine-app" :class="{ dark: $pine.dark }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "app-component",
};
</script>

<style lang="scss">
@import "@/assets/global.scss";
</style>
