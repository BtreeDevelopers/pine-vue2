<template>
  <div class="home">
    <p-menu v-model="menu" :close-on-click="close">
      <p-btn style="margin: 10px"> Abrir menu </p-btn>
      <template slot="menu"> menu aberto </template>
    </p-menu>
    <fieldset style="margin: 10px">
      <legend>Close on Click:</legend>
      <div>
        <input type="radio" id="sim" name="sim" :value="true" v-model="close" />
        <label for="sim">Sim</label>
      </div>

      <div>
        <input
          type="radio"
          id="nao"
          name="nao"
          :value="false"
          v-model="close"
        />
        <label for="nao">Não</label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    menu: false,
    close: true,
  }),
};
</script>
