import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cast",
    name: "Cast",
    // route level code-splitting
    // this generates a separate chunk (cast.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cast" */ "../views/Cast.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    // route level code-splitting
    // this generates a separate chunk (gallery.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
  },
  {
    path: "/episodes",
    name: "Episodes",
    // route level code-splitting
    // this generates a separate chunk (episodes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "episodes" */ "../views/Episodes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
