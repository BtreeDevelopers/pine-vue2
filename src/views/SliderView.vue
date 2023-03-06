<template>
  <div class="home">
    <p-slider-range
      v-model="slider2"
      :max="max"
      :min="min"
      :step="step"
      :color="cor"
    />
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Valor1:</legend>
        <div>
          <input type="number" v-model.number="slider2[0]" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Valor2:</legend>
        <div>
          <input type="number" v-model.number="slider2[1]" />
        </div>
      </fieldset>
    </div>
    <hr />
    <p-slider
      v-model="slider"
      :max="max"
      :min="min"
      :step="step"
      :color="cor"
    />

    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Valor:</legend>
        <div>
          <input type="number" v-model.number="slider" />
        </div>
      </fieldset>
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
    </div>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Max:</legend>
        <div>
          <input type="number" v-model.number="max" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Min:</legend>
        <div>
          <input type="number" v-model.number="min" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Step:</legend>
        <div>
          <input type="number" v-model.number="step" />
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    slider: 50,
    slider2: [20, 60],
    max: 100,
    min: 0,
    step: 1,
    close: true,
    cor: "primary",
  }),
};
</script>
