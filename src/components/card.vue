<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "card-component",
};
</script>
<style lang="scss" scoped>
.card {
  width: min-content;
}
</style>
