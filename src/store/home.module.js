import HomeService from "@/services/home.service";
const slideInfos = JSON.parse(localStorage.getItem("slideInfos"));
const initialState = slideInfos
  ? { status: { isData: true }, slideInfos }
  : { status: { isData: false }, slideInfos: null };

export const home = {
  namespaced: true,
  state: initialState,
  actions: {
    getSlideInfos({ commit }) {
      return HomeService.getSlideInfos().then((data) => {
        commit("getSideInfos", data);
        return Promise.resolve(data);
      });
    },
  },
  mutations: {
    getSideInfos(state, data) {
      state.status.isData = true;
      state.slideInfos = data;
    },
  },
  getters: {
    slideInfos: (state) => state.getSlideInfos,
  },
};
