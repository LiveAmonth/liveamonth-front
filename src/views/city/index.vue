<template>
  <div class="city">
    <section class="property-details-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pd-text">
              <div class="row pt-5">
                <!--City 제목 및 도시 이름 리스트-->
                <div class="col-lg-6">
                  <title-slot>
                    <template #title><h3>{{ $t("city.info.title") }}</h3></template>
                  </title-slot>
                </div>
                <div class="col-lg-6">
                  <div class="pd-social">
                    <button
                        class="btn btn-outline-light p-1 align-middle"
                        v-for="cityMenu in cityMenus"
                        :key="cityMenu"
                        @click="changeCity(cityMenu)"
                    >
                      {{ $t("city.name." + cityMenu) }}
                    </button>
                  </div>
                </div>
              </div>
              <city-info v-if="!isPending"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <city-food-and-view v-if="!isPending"/>
  </div>
</template>

<script>
import CityInfo from "@/components/city/CityInfo";
import TitleSlot from "@/components/slot/TitleSlot";
import CityFoodAndView from "@/components/city/CityFoodAndView";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useCity} from "@/composables/city";

export default {
  name: "City",
  components: {
    TitleSlot,
    CityInfo,
    CityFoodAndView,
  },
  props: {
    name: {
      type: String,
      default: "SE",
    },
  },
  setup(props) {
    const store = useStore();

    const cityName = ref(props.name);
    const cityMenus = computed(() => {
      return store.state.cityMenus;
    });
    const {error, isPending, getTotalCityData, getFoodAndView} = useCity();
    const totalCityInfo = ref(getTotalCityData(cityName.value));
    const foodsAndView = ref(getFoodAndView(cityName.value));
    const changeCity = (selectedCity) => {
      try {
        cityName.value = selectedCity;
        totalCityInfo.value = getTotalCityData(selectedCity);
        foodsAndView.value = getFoodAndView(selectedCity);
      } catch (err) {
        console.log(err);
      }
    };

    return {
      error,
      isPending,
      cityMenus,
      cityName,
      totalCityInfo,
      foodsAndView,
      changeCity,
    };
  },
};
</script>

<style></style>
