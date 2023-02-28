<template>
  <div class="home">
    <p-btn
      style="margin: 10px"
      @click="funcao"
      :small="size === 'small'"
      :middle="size === 'middle'"
      :big="size === 'large'"
      :solid="type === 'solid'"
      :outline="type === 'outline'"
      :text="type === 'text'"
      :icon="size === 'icon'"
      :disabled="disabled"
      :loading="loading"
      :color="cor"
    >
      <template v-if="size !== 'icon'"> Teste </template>
      <p-icon v-else name="user"></p-icon>
    </p-btn>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Color:</legend>
        <div>
          <select name="cores" id="cores" v-model="cor">
            <option value="primary">Primary</option>
            <option value="red">Red</option>
            <option value="#228b22">#228b22</option>
          </select>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Loading:</legend>
        <div>
          <input
            type="radio"
            id="lsim"
            name="lsim"
            :value="true"
            v-model="loading"
          />
          <label for="lsim">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="lnao"
            name="lnao"
            :value="false"
            v-model="loading"
          />
          <label for="nao">Não</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Disabled:</legend>
        <div>
          <input
            type="radio"
            id="sim"
            name="sim"
            :value="true"
            v-model="disabled"
          />
          <label for="sim">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="nao"
            name="nao"
            :value="false"
            v-model="disabled"
          />
          <label for="nao">Não</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Tamanho:</legend>
        <div>
          <input
            type="radio"
            id="icon"
            name="icon"
            value="icon"
            v-model="size"
          />
          <label for="icon">Icon</label>
        </div>
        <div>
          <input
            type="radio"
            id="small"
            name="small"
            value="small"
            v-model="size"
          />
          <label for="small">Small</label>
        </div>

        <div>
          <input
            type="radio"
            id="middle"
            name="middle"
            value="middle"
            v-model="size"
          />
          <label for="middle">Middle</label>
        </div>
        <div>
          <input
            type="radio"
            id="large"
            name="large"
            value="large"
            v-model="size"
          />
          <label for="large">Large</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Tipo:</legend>
        <div>
          <input
            type="radio"
            id="solid"
            name="solid"
            value="solid"
            v-model="type"
          />
          <label for="solid">Solid</label>
        </div>

        <div>
          <input
            type="radio"
            id="outline"
            name="outline"
            value="outline"
            v-model="type"
          />
          <label for="outline">outline</label>
        </div>
        <div>
          <input
            type="radio"
            id="text"
            name="text"
            value="text"
            v-model="type"
          />
          <label for="text">Text</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    size: "middle",
    type: "solid",
    disabled: false,
    loading: false,
    cor: "primary",
  }),
  methods: {
    funcao() {
      alert("teste");
    },
  },
};
</script>
