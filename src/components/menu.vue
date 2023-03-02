<template>
  <div
    class="p-menu"
    ref="menuBase"
    v-click-outside="{
      handler: closeMenu,
      include: () => [...allChildren()],
    }"
  >
    <div class="component" ref="comp" @click="showMenu = !showMenu">
      <slot></slot>
    </div>

    <div
      class="menu"
      :class="{ 'show-modal': showMenu }"
      ref="timerPicker"
      @click="
        () => {
          closeOnClick && closeMenu();
        }
      "
    >
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
import { getAllChildren, getColor } from "@/mixins/utils";
export default {
  name: "pine-menu",
  props: {
    value: Boolean,
    closeOnClick: {
      default: true,
      type: Boolean,
    },
  },
  data: () => ({
    showMenu: false,
    function: new Function(),
  }),
  watch: {
    value: {
      handler(val) {
        this.showMenu = val;
      },
      immediate: true,
    },
    showMenu: {
      handler(val) {
        this.$emit("input", val);
      },
      immediate: true,
    },
  },
  methods: {
    allChildren() {
      if (!this.$el) return [];
      return getAllChildren(this.$el.children);
    },

    closeMenu() {
      this.showMenu = false;
    },
    getColor,
  },
};
</script>

<style lang="scss">
.p-menu {
  // position: relative;
  height: 100%;
  width: min-content;
  .component {
    width: min-content;
  }

  .menu {
    display: none;
    box-sizing: border-box;
    position: absolute;
    // width: 100%;

    &.show-modal {
      display: flex;
    }
    margin-top: 2px;
    background: v-bind(getColor("card"));
    border-radius: 20px;
    box-shadow: 0px 7.60456px 19.0114px rgba(0, 0, 0, 0.25);
    padding: 30px;
  }
}
</style>
