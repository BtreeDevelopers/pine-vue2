import app from "./components/app.vue";
import input from "./components/input.vue";
import icon from "./components/icon.vue";
import card from "./components/card.vue";
import themeToggle from "./components/theme-toggle.vue";
import vue from "vue";
// Declare install function executed by Vue.use()
export function pinePlugin(Vue, options) {
  if (pinePlugin.installed) return;
  pinePlugin.installed = true;

  //COMPONENTE
  Vue.component("p-app", app);
  Vue.component("p-input", input);
  Vue.component("p-icon", icon);
  Vue.component("p-card", card);
  Vue.component("p-theme-toggle", themeToggle);

  //GLOBAL PROPS $pine
  const props = vue.observable({
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
