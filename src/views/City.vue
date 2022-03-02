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
                      class="button btn-outline-light p-1"
                      v-for="cityMenu in cityMenus"
                      :key="cityMenu"
                      @click="changeCity(cityMenu)"
                    >
                      {{ $t("city.name." + cityMenu) }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="card">
                <tab-board-slot>
                  <template v-slot:tab-button-1>
                    <li class="nav-item">
                      <button
                        class="nav-link active"
                        id="nav-detail-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-detail"
                        type="button"
                        role="tab"
                        aria-controls="nav-detail"
                        aria-selected="true"
                      >
                        {{ $t("city.tab.intro") }}
                      </button>
                    </li>
                  </template>
                  <template v-slot:tab-button-2>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        id="nav-transport-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-transport"
                        type="button"
                        role="tab"
                        aria-controls="nav-transport"
                        aria-selected="false"
                      >
                        {{ $t("city.tab.tTransport") }}
                      </button>
                    </li>
                  </template>
                  <template v-slot:tab-button-3>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        id="nav-weather-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-weather"
                        type="button"
                        role="tab"
                        aria-controls="nav-weather"
                        aria-selected="false"
                      >
                        {{ $t("city.tab.tWeather") }}
                      </button>
                    </li>
                  </template>
                  <template v-slot:tab-content-1>
                    <div
                      class="tab-pane fade show active"
                      id="nav-detail"
                      aria-labelledby="nav-detail-tab"
                      role="tabpanel"
                    >
                      <city-detail v-bind="totalCityInfos"></city-detail>
                    </div>
                  </template>
                  <template v-slot:tab-content-2>
                    <div
                      class="tab-pane fade"
                      id="nav-transport"
                      aria-labelledby="nav-transport-tab"
                      role="tabpanel"
                    >
                      <city-transport
                        :transports="totalCityInfos"
                      ></city-transport>
                    </div>
                  </template>
                  <template v-slot:tab-content-3>
                    <div
                      class="tab-pane fade"
                      id="nav-weather"
                      aria-labelledby="nav-weather-tab"
                      role="tabpanel"
                    >
                      <city-weather :weathers="totalCityInfos"></city-weather>
                    </div>
                  </template>
                </tab-board-slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <city-food-and-view v-bind="foodsAndView" />
  </div>
</template>

<script>
// import CityInfo from "@/components/city/CityInfo";
import TitleSlot from "@/components/slot/TitleSlot";
import TabBoardSlot from "@/components/slot/TabBoardSlot";
import CityDetail from "@/components/city/CityDetail";
import CityTransport from "@/components/city/CityTransport";
import CityWeather from "@/components/city/CityWeather";
import CityFoodAndView from "@/components/city/CityFoodAndView";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CityService from "../services/city.service";

export default {
  name: "City",
  components: {
    TitleSlot,
    TabBoardSlot,
    CityDetail,
    CityTransport,
    CityWeather,
    CityFoodAndView,
  },
  setup() {
    const store = useStore();

    const cityName = ref("SE");
    const cityMenus = computed(() => {
      return store.state.cityMenus;
    });

    const totalCityInfos = computed(() => {
      return getTotalCityInfos(cityName.value).then((data) => {
        return data;
      });
    });
    const foodsAndView = ref(
      CityService.getFoodsAndView(cityName.value).then()
    );
    // const totalCityInfos = computed(() => {
    //   if (store.state.city.totalCityInfos.data == null) {
    //     store.dispatch("city/getTotalCityInfos", cityName.value);
    //   }
    //   return store.state.city.totalCityInfos.data;
    // });
    // const foodsAndView = computed(() => {
    //   if (store.state.city.foodsAndView.data == null) {
    //     store.dispatch("city/getFoodsAndView", cityName.value);
    //   }
    //   return store.state.city.foodsAndView.data;
    // });

    const changeCity = async (selectedCity) => {
      cityName.value = selectedCity;
      totalCityInfos.value = CityService.getTotalCityInfos(cityName.value);
      foodsAndView.value = CityService.getFoodsAndView(cityName.value);
      // await store.dispatch("city/getTotalCityInfos", cityName.value);
      // await store.dispatch("city/getFoodsAndView", cityName.value);
    };

    return {
      cityMenus,
      cityName,
      totalCityInfos,
      foodsAndView,
      changeCity,
    };
  },
};
</script>

<style></style>
