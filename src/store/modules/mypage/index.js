import MyPageService from "@/services/mypage.service";

export default {
  namespaced: true,
  state: {
    menus: {},
  },
  actions: {
    getMyPageMenus({ commit }) {
      return MyPageService.getMyPageMenus().then(
        (data) => {
          commit("GET_MY_PAGE_MENUS", data);
          return Promise.resolve(data);
        },
        (error) => {
          commit("GET_MY_PAGE_MENUS_FAIL");
          return Promise.resolve(error);
        }
      );
    },
  },
  mutations: {
    GET_MY_PAGE_MENUS(state, data) {
      state.menus = data;
    },
    GET_MY_PAGE_MENUS_FAIL(state) {
      state.menus = null;
    },
  },
  getters: {
    myPageMenus(state) {
      return state.menus.contents;
    },
  },
};
