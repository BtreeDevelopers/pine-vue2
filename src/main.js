import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { pinePlugin } from "./index";
import router from './router'
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
  router,
  render: (h) => h(App)
}).$mount("#app");
