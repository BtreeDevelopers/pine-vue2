import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { pinePlugin } from "./index";
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(pinePlugin, {
  theme: "light",
  modais: [
    {
      name: "teste",
      locate: require("@/modalTeste.vue").default,
    },
  ],
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
