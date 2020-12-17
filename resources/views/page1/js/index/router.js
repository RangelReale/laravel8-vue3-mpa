import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";

const routes = [
  {
    path: "/page1",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
