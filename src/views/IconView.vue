<template>
  <div class="about">
    <p-btn icon><p-icon :name="icon"></p-icon></p-btn>
    <p-icon :name="icon" :color="color"></p-icon>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Color:</legend>
        <div>
          <select name="cores" id="cores" v-model="icon">
            <option v-for="i in icons" :key="i" :value="i">{{ i }}</option>
          </select>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Color:</legend>
        <div>
          <select name="bg" id="bg" v-model="color">
            <option value="primary">Primary</option>
            <option value="red">red</option>
            <option value="#228b22">#228b22</option>
          </select>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
export default {
  mounted() {},
  computed: {
    icons() {
      return Object.keys(feather.icons);
    },
  },
  data: () => ({
    icon: "user",
    persistent: false,
    color: "primary",
  }),
};
</script>
