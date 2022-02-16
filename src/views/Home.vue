<template>
  <div class="home">
    <div class="container px-4 px-lg-5">
      <city-slide/>
      <popular-tab/>
    </div>
  </div>
</template>

<script>
import CitySlide from "@/components/home/CitySlide";
import PopularTab from "@/components/home/PopularTab";

export default {
  name: "home",
  components: {
    CitySlide,
    PopularTab,
  },
  data() {
    return {};
  },
};
</script>
