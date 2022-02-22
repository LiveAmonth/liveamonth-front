import AuthService from "../services/user.service";

/**
 * 1. Server API 호출
 * 2. Response로 사용자정보(토큰)를 받음
 * 3. mutations에서 사용자 정보(토큰)와 로그인 상태를 저장
 * @type {any}
 */
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  // Server API 호출
  actions: {
    login({ commit }, { username, password }) {
      return AuthService.login(username, password).then(
        (token) => {
          commit("loginSuccess", token);
          return Promise.resolve(token);
        },
        (error) => {
          commit("loginFailure");
          return Promise.resolve(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout().then(() => commit("logout"));
    },
  },
  // API 호출 값을 파라미터로 전달받은 후 state에 값을 저장
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      this.state.status.loggedIn = false;
      state.user = null;
    },
  },
  getters: {
    isLoggedIn: (state) => state.loginSuccess,
  },
};
