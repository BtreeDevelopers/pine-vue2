import app from "./components/app.vue";
import textField from "./components/text-field.vue";
import btn from "./components/btn.vue";
import modal from "./components/modal.vue";
import loading from "./components/loading.vue";
import icon from "./components/icon.vue";
import menu from "./components/menu.vue";
import slider from "./components/slider.vue";
import sliderRange from "./components/slider-range.vue";

import input from "./components/input.vue";
import card from "./components/card.vue";
import themeToggle from "./components/theme-toggle.vue";
import { ClickOutside } from "@/directive/clickOutside";
import vue from "vue";
// Declare install function executed by Vue.use()
export function pinePlugin(Vue, options) {
  if (pinePlugin.installed) return;
  pinePlugin.installed = true;

  //COMPONENTE
  Vue.component("p-app", app);
  Vue.component("p-text-field", textField);
  Vue.component("p-btn", btn);
  Vue.component("p-modal", modal);
  Vue.component("p-loading", loading);
  Vue.component("p-icon", icon);
  Vue.component("p-menu", menu);
  Vue.component("p-slider", slider);
  Vue.component("p-slider-range", sliderRange);

  Vue.component("p-input", input);
  Vue.component("p-card", card);
  Vue.component("p-theme-toggle", themeToggle);

  //criando Modais
  for (const modal of options.modais) {
    Vue.component("p-modal-" + modal.name, modal.locate);
  }

  Vue.directive("click-outside", ClickOutside);

  //GLOBAL PROPS $pine
  const props = vue.observable({
    modal: {
      modais: [...options.modais],
      name: "",
      item: {},
      open(name, item) {
        const modal = this.modais.find((el) => el.name === name);
        if (modal) {
          this.name = modal.name;
          this.item = item;
        }
      },
      close() {
        this.item = {};
        this.name = "";
      },
    },
    theme: options?.theme || "light", //'dark'
    colors: {
      light: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FED050",
        background: "#F1F1F1",
        card: "#E5E6E8",
        ...options?.colors?.light,
      },
      dark: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FED050",
        background: "#1E1E1E",
        card: "#252831",
        ...options?.colors?.dark,
      },
    },
  });
  Vue.prototype.$pine = props;

  //CHANGE GLOBAL CSS VARS
  var r = document.querySelector(":root");
  r.style.setProperty("--p-light-primary", props.colors.light.primary);
  r.style.setProperty("--p-light-secondary", props.colors.light.secondary);
  r.style.setProperty("--p-light-error", props.colors.light.error);
  r.style.setProperty("--p-light-warning", props.colors.light.warning);
  r.style.setProperty("--p-light-background", props.colors.light.background);
  r.style.setProperty("--p-light-card", props.colors.light.card);
  r.style.setProperty("--p-dark-primary", props.colors.dark.primary);
  r.style.setProperty("--p-dark-secondary", props.colors.dark.secondary);
  r.style.setProperty("--p-dark-error", props.colors.dark.error);
  r.style.setProperty("--p-dark-warning", props.colors.dark.warning);
  r.style.setProperty("--p-dark-background", props.colors.dark.background);
  r.style.setProperty("--p-dark-card", props.colors.dark.card);
}

// Create module definition for Vue.use()
const plugin = {
  install: pinePlugin,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default app;
