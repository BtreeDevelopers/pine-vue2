<template>
  <div class="about">
    <p-text-field
      v-model="value"
      :disabled="disabled"
      :color="color"
      :background-color="backgroundColor"
      :label="label"
    />
    <p>
      {{ value }}
    </p>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Label:</legend>
        <div>
          <input type="text" v-model="label" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Type:</legend>
        <div>
          <select name="bg" id="bg" v-model="backgroundColor">
            <option value="card">Card</option>
            <option value="pink">Pink</option>
            <option value="#808080">#808080</option>
          </select>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Color:</legend>
        <div>
          <select name="cores" id="cores" v-model="color">
            <option value="primary">Primary</option>
            <option value="red">Red</option>
            <option value="#228b22">#228b22</option>
          </select>
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
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "",
    color: "primary",
    backgroundColor: "card",
    disabled: false,
    label: "label",
  }),
};
</script>
