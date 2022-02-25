<template>
  <div class="city">
    <city-info v-bind:city-name="cityName" />
    <city-food-and-view v-bind:city-name="cityName" />
  </div>
</template>

<script>
import CityInfo from "@/components/city/CityInfo";
import CityFoodAndView from "@/components/city/CityFoodAndView";

export default {
  name: "City",
  components: {
    CityInfo,
    CityFoodAndView,
  },
  props: {
    cityName: String,
  },
};
</script>

<style></style>
