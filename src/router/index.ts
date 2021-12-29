import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/label",
    name: "Label",
    component: () => import("../views/Label.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("../views/Statistics.vue"),
  },
  {
    path: "*",
    name: "NotFount",
    component: () => import("../views/NotFount.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
