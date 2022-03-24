import {createRouter, createWebHistory} from "vue-router";
import Home from "../views";
import Login from "@/views/login";
import MyPage from "@/views/mypage";
import store from "@/store";

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
        meta: {requiresAuth: true}
    },
];
// otherwise redirect to home

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const isLogin = store.getters["auth/isLoggedIn"];
        if (!isLogin) {
            next({
                name: "Login",
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
