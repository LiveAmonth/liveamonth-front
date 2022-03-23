import { createRouter, createWebHistory } from "vue-router";
import Home from "../views";
import Login from "@/views/login";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/city",
    name: "City",
    component: () =>
      import(/* webpackChunkName: "Information" */ "@/views/city"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
