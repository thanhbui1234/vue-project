import { createRouter, createWebHistory } from "vue-router";
import Layouthead from "../layouts/LayoutHead.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layouthead,
    children: [
      {
        path: "/",
        name: "Mainlayout",
        component: () => import("../layouts/Mainlayout.vue"),
        redirect: "/home",
        children: [
          {
            path: "/home",
            name: "home",
            component: () => import("../views/Home.vue"),
          },
          {
            path: "/home",
            name: "home",
            component: () => import("../views/Home.vue"),
          },
          {
            path: "/short/:id",
            name: "short",
            component: () => import("../views/Short.vue"),
          },
        ],
      },
      {
        path: "/detls/:id",
        name: "detail",
        component: () => import("../views/Des.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../views/Notfound.vue"),
  },

  // {
  //   path: "/detls/:id",
  //   name: "detail",
  //   component: () => import("../views/Des.vue"),
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
