<template>
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
          <city-detail :details="details"></city-detail>
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
            :city-name="details.cityName"
            :transports="transports"
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
            :city-name="details.cityName"
            :weathers="weather"
          ></city-weather>
        </div>
      </template>
    </tab-board-slot>
  </div>
</template>

<script>
import TabBoardSlot from "@/components/slot/TabBoardSlot";
import CityDetail from "@/components/city/CityDetail";
import CityTransport from "@/components/city/CityTransport";
import CityWeather from "@/components/city/CityWeather";
import { useCity } from "@/composables/city";

export default {
  name: "city-info",
  components: {
    TabBoardSlot,
    CityDetail,
    CityTransport,
    CityWeather,
  },
  setup() {
    const { details, transports, weather } = useCity();
    return { details, transports, weather };
  },
};
</script>

<style></style>
