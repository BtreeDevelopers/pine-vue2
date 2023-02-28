<template>
  <p-app>
    <p-text-field v-model="value2" />
    <p>
      {{ value2 }}
    </p>
    <p-loading></p-loading>
    <p-btn @click="$pine.modal.open('teste')" small>teste</p-btn>
    <p-btn @click="teste">teste</p-btn>
    <p-btn @click="teste" big>teste</p-btn>
    <p-btn @click="teste" icon><p-icon name="user" /></p-btn>
    <br />
    <br />
    <p-btn @click="teste" color="red">teste</p-btn>
    <p-btn @click="teste" text color="red">teste</p-btn>
    <p-btn @click="teste" outline color="red">teste</p-btn>
    <p-btn @click="teste" icon color="red" text><p-icon name="user" /></p-btn>
    <p-btn @click="teste" icon color="red" outline
      ><p-icon name="user"
    /></p-btn>
    <br />
    <br />
    <p-btn @click="teste" color="red" loading>teste</p-btn>
    <p-btn @click="teste" text color="red" loading>teste</p-btn>
    <p-btn @click="teste" outline color="red" loading>teste</p-btn>
    <p-btn @click="teste" icon color="red" text loading
      ><p-icon name="user"
    /></p-btn>
    <p-btn @click="teste" icon color="red" outline loading
      ><p-icon name="user"
    /></p-btn>
    <br />
    <br />
    <p-btn @click="teste" small disabled>teste</p-btn>
    <p-btn @click="teste" text disabled>teste</p-btn>
    <p-btn @click="teste" big outline disabled>teste</p-btn>
    <p-btn @click="teste" icon disabled><p-icon name="user" /></p-btn>
    <p-btn @click="teste" icon outline disabled><p-icon name="user" /></p-btn>
    <p-btn @click="teste" icon text disabled><p-icon name="user" /></p-btn>
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
</template>

<script>
export default {
  name: "App",
  data: () => ({
    value2: "das",
    value: "activity",
  }),
  created() {
    // this.$pine.modal.open("teste", { t: 1 });
    // console.log(this.$pine);
  },
  methods: {
    teste() {
      console.log("teste");
    },
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
