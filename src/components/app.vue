<template>
  <div id="pine-app" :class="{ dark: $pine.theme === 'dark' }">
    <div class="pine-main">
      <modalBase :value="!!modal" @close-modal="closeModal"
        ><component :is="modal"></component>
      </modalBase>
      <slot />
    </div>
  </div>
</template>

<script>
import modalBase from "./modal.vue";
export default {
  components: { modalBase },
  name: "app-component",
  data: () => ({
    modal: "",
  }),
  methods: {
    closeModal() {
      this.$pine.modal.close();
    },
  },
  watch: {
    "$pine.modal.name": {
      deep: true,
      immediate: true,
      handler(value) {
        if (!value) {
          this.modal = "";
          return;
        }
        this.modal = "p-modal-" + this.$pine.modal.name;
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/global.scss";
#pine-app {
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  .pine-main {
    max-height: 100%;
    overflow: auto;
  }
}
</style>
