import AuthService from "@/services/user.service";

/**
 * 1. Server API 호출
 * 2. Response로 사용자정보(토큰)를 받음
 * 3. mutations에서 사용자 정보(토큰)와 로그인 상태를 저장
 * @type {any}
 */
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? {status: {loggedIn: true}, user}
    : {status: {loggedIn: false}, user: null};

export default {
    namespaced: true,
    state: initialState,
    // Server API 호출
    actions: {
        login({commit}, {username, password}) {
            return AuthService.login(username, password).then(
                (user) => {
                    commit("LOGIN_SUCCESS", user);
                    return Promise.resolve(user);
                },
                (error) => {
                    commit("LOGIN_FAIL");
                    return Promise.resolve(error);
                }
            );
        },
        logout({commit}) {
            AuthService.logout().then(() => commit("LOGOUT"));
        },
    },
    // API 호출 값을 파라미터로 전달받은 후 state에 값을 저장
    mutations: {
        LOGIN_SUCCESS(state, payload) {
            state.status.loggedIn = true;
            state.user = payload;
        },
        LOGIN_FAIL(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        LOGOUT(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    },
    getters: {
        isLoggedIn(state) {
            return state.status.loggedIn;
        },
        loggedInUser(state){
            return state.user;
        }
    }
};
