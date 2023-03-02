<template>
  <div
    :style="{ display: !value ? 'none' : 'flex' }"
    class="p-modal-bg"
    ref="baseModal"
    @click.self="closeModal"
  >
    <div class="p-modal">
      <div class="p-modal-card">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pine-modal",
  props: {
    value: Boolean,
    persistent: Boolean,
  },
  methods: {
    closeModal() {
      if (this.persistent) return;
      this.$emit("close-modal");
      this.$emit("input", !this.value);
    },
  },
  computed: {
    color() {
      return this.$pine.colors[this.$pine.theme].card;
    },
  },
};
</script>

<style lang="scss">
.p-modal-bg {
  z-index: 5;
  position: absolute;
  background: #00000062;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.p-modal-card {
  background: v-bind(color);
  padding: 20px;
  border-radius: 10px;
}
</style>
