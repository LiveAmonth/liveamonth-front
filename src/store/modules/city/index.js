import CityService from "@/services/city.service";

/**
 * 1. Server API 호출
 * 2. Response로 사용자정보(토큰)를 받음
 * 3. mutations에서 사용자 정보(토큰)와 로그인 상태를 저장
 * @type {any}
 */
export default {
  namespaced: true,
  state: {
    totalCityData: {},
    foodAndView: {}
  },
  // Server API 호출
  actions: {
    getTotalCityInfos({ commit }, payload) {
      return CityService.getTotalCityInfos(payload.cityName).then(
        (data) => {
          commit("GET_TOTAL_CITY_DATA", data);
          return Promise.resolve(data);
        },
        (error) => {
          commit("GET_TOTAL_CITY_DATA_FAIL");
          return Promise.resolve(error);
        }
      );
    },
    getFoodsAndView({ commit }, payload) {
      return CityService.getFoodsAndView(payload.cityName).then(
        (data) => {
          commit("GET_FOOD_AND_VIEW", data);
          return Promise.resolve(data);
        },
        (error) => {
          commit("GET_FOOD_AND_VIEW_FAIL");
          return Promise.resolve(error);
        }
      );
    }
  },
  // API 호출 값을 파라미터로 전달받은 후 state에 값을 저장
  mutations: {
    GET_TOTAL_CITY_DATA(state, data) {
      state.totalCityData.data = data;
    },
    GET_FOOD_AND_VIEW(state, data) {
      state.foodsAndView.data = data;
    },
    GET_TOTAL_CITY_DATA_FAIL(state) {
      state.totalCityData.data = null;
    },
    GET_FOOD_AND_VIEW_FAIL(state) {
      state.foodAndView.data = null;
    },
    deleteStore(state) {
      state.totalCityData.data = null;
      state.foodAndView.data = null;
    }
  },
  getters: {
    transportInTotalCityData(state) {
      return state.totalCityData.transports;
    },
    weatherInTotalCityData(state) {
      return state.totalCityData.weathers;
    },
    foodInFoodAndView(state) {
      return state.foodAndView.foodInfos;
    },
    viewInFoodAndView(state) {
      return state.foodAndView.viewInfos;
    },
    detailInTotalCityData(state) {
      return {
        cityName: state.totalCityData.cityName,
        content: state.totalCityData.content,
        image: require(`@/assets/img/intro/${state.totalCityData.image}`)
      };
    }
  }
};
