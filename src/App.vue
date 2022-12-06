<template>
  <div id="app" style="height: 100vh">
    <p-app style="height: 100vh">
      <p-input v-model="value" />
      <p-icon :name="value" />
      <p class="primary">{{ $pine.theme }}</p>
      <p-theme-toggle v-model="theme" />
      <p-card class="rounded p-3 my-3 mx-1"> teste </p-card>
      <p>btree board</p>
      <h1>TIPOGRAFIA</h1>
      <table>
        <tr>
          <td>
            <h2>FontSize</h2>
          </td>
          <td>
            <h2>FontWeight</h2>
          </td>
        </tr>
        <tr>
          <td>
            <p class="font-size-small">small</p>
          </td>
          <td>
            <p class="font-weight-light">light</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="font-size-normal">normal</p>
          </td>
          <td>
            <p class="font-weight-regular">regular</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="font-size-large">large</p>
          </td>
          <td>
            <p class="font-weight-medium">medium</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="font-size-h2">h2</p>
          </td>
          <td>
            <p class="font-weight-semibold">semibold</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="font-size-h1">h1</p>
          </td>
          <td>
            <p class="font-weight-bold">bold</p>
          </td>
        </tr>
      </table>
    </p-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    value: "activity",
  }),
  created() {
    console.log(this.$pine);
  },
  computed: {
    theme: {
      set(v) {
        this.$pine.theme = v ? "dark" : "light";
      },
      get() {
        return this.$pine.theme === "dark";
      },
    },
  },
};
</script>
<style>
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
</style>
