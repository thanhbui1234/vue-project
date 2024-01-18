import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import UserHome from "./views/UserHome.vue";
// import UserProfile from "./views/UserProfile.vue";
// import UserPosts from "./views/UserPosts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "details",
        name: "details",
        component: () => import("../views/Detail.vue"),
      },
    ],
  },
  {
    path: "/des/:id",
    component: () => import("../views/Des.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
