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
                  <title-slot>{{ $t("city.info.title") }}</title-slot>
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
              <city-info :totalCityInfo="totalCityInfo"></city-info>
            </div>
          </div>
        </div>
      </div>
    </section>
    <city-food-and-view :foodsAndView="foodsAndView" />
  </div>
</template>

<script>
import CityInfo from "@/components/city/CityInfo";
import TitleSlot from "@/components/slot/TitleSlot";
import CityFoodAndView from "@/components/city/CityFoodAndView";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

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
    const totalCityInfo = ref({});
    const foodsAndView = ref({});

    const cityMenus = computed(() => {
      return store.state.cityMenus;
    });

    const getInformation = async (cityName) => {
      try {
        const res1 = await axios.get(
          "http://localhost:8080/v1/api/city/" + cityName + "/total-infos"
        );
        const res2 = await axios.get(
          "http://localhost:8080/v1/api/city/" + cityName + "/foods-and-view"
        );
        totalCityInfo.value = res1.data.data;
        foodsAndView.value = res2.data.data;
      } catch (err) {
        console.log(err);
      }
    };
    getInformation(cityName.value);
    const changeCity = (selectedCity) => {
      try {
        cityName.value = selectedCity;
        getInformation(selectedCity);
      } catch (err) {
        console.log(err);
      }
    };

    return {
      cityMenus,
      cityName,
      totalCityInfo,
      foodsAndView,
      getInformation,
      changeCity,
    };
  },
};
</script>

<style></style>
