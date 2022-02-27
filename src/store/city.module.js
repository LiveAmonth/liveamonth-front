import CityService from "../services/city.service";
/**
 * 1. Server API 호출
 * 2. Response로 사용자정보(토큰)를 받음
 * 3. mutations에서 사용자 정보(토큰)와 로그인 상태를 저장
 * @type {any}
 */
const totalCityInfos = {
  data: null,
};
const foodsAndView = {
  data: null,
};

export const city = {
  namespaced: true,
  state: { totalCityInfos, foodsAndView },
  // Server API 호출
  actions: {
    getTotalCityInfos({ commit }, cityName) {
      if (cityName != null) {
        return CityService.getTotalCityInfos(cityName).then(
          (data) => {
            commit("getTotalCityInfos", data);
            return Promise.resolve(data);
          },
          (error) => {
            commit("getTotalCityInfosFailure");
            return Promise.resolve(error);
          }
        );
      }
    },
    getFoodsAndView({ commit }, cityName) {
      if (cityName != null) {
        return CityService.getFoodsAndView(cityName).then(
          (data) => {
            commit("getFoodsAndView", data);
            return Promise.resolve(data);
          },
          (error) => {
            commit("getFoodsAndViewFailure");
            return Promise.resolve(error);
          }
        );
      }
    },
  },
  // API 호출 값을 파라미터로 전달받은 후 state에 값을 저장
  mutations: {
    getTotalCityInfos(state, data) {
      state.totalCityInfos.data = data;
    },
    getFoodsAndView(state, data) {
      state.foodsAndView.data = data;
    },
    getTotalCityInfosFailure(state) {
      state.totalCityInfos.data = null;
    },
    getFoodsAndViewFailure(state) {
      state.foodsAndView.data = null;
    },
    deleteStore(state) {
      state.totalCityInfos.data = null;
      state.foodsAndView.data = null;
    },
  },
  getters: {
    totalCityInfos: (state) => state.getTotalCityInfos,
    foodsAndView: (state) => state.getFoodsAndView,
  },
};
