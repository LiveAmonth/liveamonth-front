import { computed, ref } from "vue";
import { useStore } from "vuex";

export const useCity = () => {
  const store = useStore();
  const error = ref(null);
  const isPending = ref(false);

  const transports = computed(
    () => store.getters["city/transportInTotalCityData"]
  );
  const weather = computed(() => store.getters["city/weatherInTotalCityData"]);
  const details = computed(() => store.getters["city/detailInTotalCityData"]);
  const foodInfo = computed(() => store.getters["city/foodInFoodAndView"]);
  const viewInfo = computed(() => store.getters["city/viewInFoodAndView"]);
  const getTotalCityData = async (cityName = "SE") => {
    error.value = null;
    isPending.value = true;
    try {
      await store.dispatch("city/getTotalCityInfos", { cityName });
      error.value = null;
      isPending.value = false;
    } catch (err) {
      error.value = "도시 정보를 가져올 수 없습니다.";
      isPending.value = false;
    }
  };

  const getFoodAndView = async (cityName = "SE") => {
    error.value = null;
    isPending.value = true;
    try {
      await store.dispatch("city/getFoodsAndView", { cityName });
      error.value = null;
      isPending.value = false;
    } catch (err) {
      error.value = "도시 정보를 가져올 수 없습니다.";
      isPending.value = false;
    }
  };

  return {
    error,
    isPending,
    transports,
    weather,
    details,
    foodInfo,
    viewInfo,
    getTotalCityData,
    getFoodAndView,
  };
};
