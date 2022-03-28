import {createRouter, createWebHistory} from "vue-router";
import Home from "../views";
import Login from "@/views/login";
import MyPage from "@/views/mypage";
import store from "@/store";
import RecheckPassword from "@/views/mypage/recheck";
import Drop from "@/views/mypage/account/drop";
import Modify from "@/views/mypage/account/modify";
import ReviewManagement from "@/views/mypage/community/review";
import ScheduleManagement from "@/views/mypage/community/schedule";
import InquiryAnswer from "@/views/mypage/inquiry/answer";
import WriteInquiry from "@/views/mypage/inquiry/write";

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
        meta: {requiresAuth: true},
        children: [
            {
                name: "MyPage.reCheck",
                path: "",
                component: RecheckPassword,
                props: true
            },
            {
                name: "MyPage.modify",
                path: "modify",
                component: Modify
            },
            {
                name: "MyPage.drop",
                path: "drop",
                component: Drop
            },
            {
                name: "MyPage.review",
                path: "review-management",
                component: ReviewManagement
            },
            {
                name: "MyPage.schedule",
                path: "schedule-management",
                component: ScheduleManagement
            },
            {
                name: "MyPage.writeInquiry",
                path: "write-inquiry",
                component: WriteInquiry
            },
            {
                name: "MyPage.inquiryAnswer",
                path: "inquiry-answer",
                component: InquiryAnswer
            },
        ],
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
