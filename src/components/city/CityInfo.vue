<template>
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
                  <span
                    class="p-1"
                    v-for="cityMenu in cityMenus"
                    :key="cityMenu"
                  >
                    <router-link
                      tag="a"
                      :to="{ name: 'City', params: { cityName: cityMenu } }"
                    >
                      {{ $t("city.name." + cityMenu) }}
                    </router-link>
                  </span>
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
                    <city-detail v-bind="state.totalCityInfos"></city-detail>
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
                      :city-name="cityName"
                      :transports="state.totalCityInfos.transports"
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
                    <city-weather
                      :city-name="cityName"
                      :weathers="state.totalCityInfos.weathers"
                    ></city-weather>
                  </div>
                </template>
              </tab-board-slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleSlot from "@/components/slot/TitleSlot";
import TabBoardSlot from "@/components/slot/TabBoardSlot";
import CityDetail from "@/components/city/CityDetail";
import CityTransport from "@/components/city/CityTransport";
import CityWeather from "@/components/city/CityWeather";
import { useStore } from "vuex";
import { computed, reactive } from "vue";

export default {
  name: "city-info",
  components: {
    TitleSlot,
    TabBoardSlot,
    CityDetail,
    CityTransport,
    CityWeather,
  },
  data() {
    return {};
  },
  props: {
    cityName: String,
    totalCityInfos: Object,
  },
  setup(props) {
    const store = useStore();
    const cityMenus = computed(() => {
      return store.state.cityMenus;
    });

    const state = reactive({
      totalCityInfos: computed(() => props.totalCityInfos),
    });

    return { cityMenus, state };
  },
};
</script>

<style></style>
