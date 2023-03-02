<template>
  <div class="about">
    <p-modal v-model="modal" :persistent="persistent">
      <p-btn @click="modal = false">fechar Modal</p-btn>
      <br />
      <br />
      <br />
      <p>Modal Teste</p>
    </p-modal>
    <p-btn @click="modal = true">Abrir Modal</p-btn>
    <fieldset style="margin: 10px">
      <legend>Persistent:</legend>
      <div>
        <input
          type="radio"
          id="sim"
          name="sim"
          :value="true"
          v-model="persistent"
        />
        <label for="sim">Sim</label>
      </div>

      <div>
        <input
          type="radio"
          id="nao"
          name="nao"
          :value="false"
          v-model="persistent"
        />
        <label for="nao">Não</label>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  data: () => ({
    modal: false,
    persistent: false,
  }),
};
</script>
