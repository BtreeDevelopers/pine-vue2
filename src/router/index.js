import Vue from "vue";
import VueRouter from "vue-router";
import ButtonView from "../views/ButtonView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/button",
    name: "button",
    component: ButtonView,
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
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
