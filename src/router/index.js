import Vue from "vue";
import VueRouter from "vue-router";
import AppView from "../views/AppView.vue";
import InputView from "../views/InputView.vue";
import ButtonView from "../views/ButtonView.vue";
import LoadingView from "../views/LoadingView.vue";
import ModalView from "../views/ModalView.vue";
import IconView from "../views/IconView.vue";
import MenuView from "../views/MenuView.vue";
import SliderView from "../views/SliderView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AppView,
  },
  {
    path: "/input",
    name: "input",
    component: InputView,
  },
  {
    path: "/button",
    name: "button",
    component: ButtonView,
  },
  {
    path: "/loading",
    name: "loading",
    component: LoadingView,
  },
  {
    path: "/modal",
    name: "modal",
    component: ModalView,
  },
  {
    path: "/icon",
    name: "icon",
    component: IconView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/slider",
    name: "slider",
    component: SliderView,
  },
  {
    path: "/textfield",
    name: "textfield",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TextfieldView.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
