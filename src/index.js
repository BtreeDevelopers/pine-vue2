import app from "./components/app.vue";
import input from "./components/input.vue";
import icon from "./components/icon.vue";
import themeToggle from "./components/theme-toggle.vue";
// Declare install function executed by Vue.use()
export function pinePlugin(Vue, options) {
  if (pinePlugin.installed) return;
  pinePlugin.installed = true;

  //COMPONENTE
  Vue.component("p-app", app);
  Vue.component("p-input", input);
  Vue.component("p-icon", icon);
  Vue.component("p-theme-toggle", themeToggle);

  //GLOBAL PROPS $pine
  const props = Vue.observable({
    color: options?.color || "blue",
    background: options?.background || options?.dark ? "#1E1E1E" : "",
    dark: options?.dark || false,
  });
  Vue.prototype.$pine = props;

  //CHANGE GLOBAL CSS VARS
  var r = document.querySelector(":root");
  r.style.setProperty("--p-primary", props.color);
  r.style.setProperty("--p-dark-background", props.background);
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
