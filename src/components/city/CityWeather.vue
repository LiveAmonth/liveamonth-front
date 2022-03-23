<template>
  <div class="tab-details">
    <ul class="left-table p-0">
      <li>
        <span class="type-title"
          >{{ $t("city.tab.tWeather") }}::{{
            $t("city.name." + cityName)
          }}</span
        >
      </li>
      <li v-for="weather in leftArr" :key="weather">
        <span class="type-name">{{
          $t("city.tab.weather.month." + weather.month)
        }}</span>
        <span class="type-value">
          {{ $t("city.tab.weather.avg") }} : {{ weather.averageDegree }}&#8451;
          | {{ $t("city.tab.weather.low") }} : {{ weather.minDegree }}&#8451; |
          {{ $t("city.tab.weather.high") }} :
          {{ weather.maxDegree }}&#8451;</span
        >
      </li>
      <li><span class="type-footer"> &nbsp;</span></li>
    </ul>
    <ul class="right-table p-0">
      <li><span class="type-title"> &nbsp;</span></li>
      <li v-for="weather in rightArr" :key="weather">
        <span class="type-name">{{
          $t("city.tab.weather.month." + weather.month)
        }}</span>
        <span class="type-value">
          {{ $t("city.tab.weather.avg") }} : {{ weather.averageDegree }}&#8451;
          | {{ $t("city.tab.weather.low") }} : {{ weather.minDegree }}&#8451; |
          {{ $t("city.tab.weather.high") }} :
          {{ weather.maxDegree }}&#8451;</span
        >
      </li>
      <li class="type-footer">{{ $t("city.tab.weather.source") }}</li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "city-weather",
  components: {},
  props: {
    cityName: String,
    weathers: Array,
  },
  setup(props) {
    const leftArr = computed(() => {
      return props.weathers.slice(0, 6);
    });
    const rightArr = computed(() => {
      return props.weathers.slice(6);
    });

    return {
      leftArr,
      rightArr,
    };
  },
};
</script>

<style></style>
