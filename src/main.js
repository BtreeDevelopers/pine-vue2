import Vue from "vue";
import App from "./App.vue";
import { pinePlugin } from "./index";
Vue.config.productionTip = false;
Vue.use(pinePlugin, { color: "red" });
new Vue({
  render: (h) => h(App),
}).$mount("#app");
