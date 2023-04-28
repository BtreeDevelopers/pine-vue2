<template>
  <div class="home">
    <p-input v-model="input"></p-input>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    input: "",
  }),
};
</script>
