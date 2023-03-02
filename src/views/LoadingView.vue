<template>
  <div class="about">
    <p-loading
      :weight="weight"
      :color="color"
      :background-color="backgroundColor"
      :size="size"
    />
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Size:</legend>
        <div>
          <input type="number" v-model.number="size" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Weight:</legend>
        <div>
          <input type="number" v-model.number="weight" />
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
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "",
    color: "primary",
    backgroundColor: "card",
    weight: 4,
    size: 60,
  }),
};
</script>
