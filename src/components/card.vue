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
<style scoped>
.card {
  width: min-content;
}
</style>
