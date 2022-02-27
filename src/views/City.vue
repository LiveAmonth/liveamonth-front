<template>
  <div class="city">
    <city-info :city-name="cityName" :total-city-infos="totalCityInfos" />
    <city-food-and-view v-bind="foodsAndView" />
  </div>
</template>

<script>
import CityInfo from "@/components/city/CityInfo";
import CityFoodAndView from "@/components/city/CityFoodAndView";
import { watch, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "City",
  components: {
    CityInfo,
    CityFoodAndView,
  },
  data() {
    return {};
  },
  setup() {
    const route = useRoute();
    const cityName = ref(route.params.cityName);
    const store = useStore();
    watch(
      () => route.params.cityName,
      async (city) => {
        if (city == null) {
          await store.commit("city/deleteStore");
        }
        cityName.value = city;
        await store.dispatch("city/getTotalCityInfos", city);
        await store.dispatch("city/getFoodsAndView", city);
      }
    );
    const totalCityInfos = computed(() => {
      let data = store.state.city.totalCityInfos.data;
      if (data == null || data.cityName !== cityName.value) {
        store.dispatch("city/getTotalCityInfos", cityName.value);
      }
      return store.state.city.totalCityInfos.data;
    });
    const foodsAndView = computed(() => {
      let data = store.state.city.foodsAndView.data;
      if (data == null || data.cityName !== cityName.value) {
        store.dispatch("city/getFoodsAndView", cityName.value);
      }
      return store.state.city.foodsAndView.data;
    });
    return { cityName, totalCityInfos, foodsAndView };
  },
};
</script>

<style></style>
