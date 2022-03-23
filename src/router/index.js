import { createRouter, createWebHistory } from "vue-router";
import Home from "../views";
import Login from "@/views/login";
import MyPage from "@/views/mypage";

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
  {
    path: "/my-page",
    name: "MyPage",
    component: MyPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
