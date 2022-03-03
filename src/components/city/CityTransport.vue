<template>
  <div class="tab-details">
    <ul class="left-table p-0">
      <li>
        <span class="type-title"
          >{{ $t("city.tab.transport.infoTitle") }}::{{
            $t("city.name." + cityName)
          }}</span
        >
      </li>
      <li v-for="transport in leftArr" :key="transport">
        <span class="type-name">{{
          $t("city.transport.name." + transport.category)
        }}</span>
        <span class="type-value">{{ transport.station_count }}</span>
      </li>
      <li><span class="type-footer"> &nbsp;</span></li>
    </ul>
    <ul class="right-table p-0">
      <li><span class="type-title"> &nbsp;</span></li>
      <li v-for="transport in rightArr" :key="transport">
        <span class="type-name">{{
          $t("city.transport.name." + transport.category)
        }}</span>
        <span class="type-value">{{ transport.station_count }}</span>
      </li>
      <li class="type-footer">{{ $t("city.tab.transport.source") }}</li>
    </ul>
  </div>
</template>

<script>
// import { computed, reactive } from "vue";

import { computed } from "vue";

export default {
  name: "city-transport",
  components: {},
  props: {
    cityName: String,
    transports: Array,
  },
  setup(props) {
    const leftArr = computed(() => {
      return props.transports.slice(0, 3);
    });
    const rightArr = computed(() => {
      return props.transports.slice(3);
    });

    return {
      leftArr,
      rightArr,
    };
  },
};
</script>

<style></style>
