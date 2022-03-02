<template>
  <div class="tab-details">
    <ul class="left-table">
      <li>
        <span class="type-title"
          >{{ $t("city.tab.transport.infoTitle") }}::{{
            $t("city.name." + cityName)
          }}</span
        >
      </li>
      <li v-for="transport in transports" :key="transport">
        <span class="type-name">{{
          $t("city.transport.name." + transport.category)
        }}</span>
        <span class="type-value">{{ transport.station_count }}</span>
      </li>
      <li><span class="type-footer"> &nbsp;</span></li>
    </ul>
    <ul class="right-table">
      <li><span class="type-title"> &nbsp;</span></li>
      <li v-for="transport in transports" :key="transport">
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

export default {
  name: "city-transport",
  components: {},
  props: {
    transports: Array,
  },
  // data() {
  //   return {};
  // },
  // setup(props) {
  //   const state = reactive({
  //     cityName: computed(() => props.cityName),
  //     transports: computed(() => props.transports),
  //   });
  //
  //   return { state };
  // },
};
</script>

<style></style>
