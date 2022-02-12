<template>
  <div class="home">
    <div class="container px-4 px-lg-5">
      <!-- Heading Row-->
      <city-slide />
      <!-- Call to Action-->
      <div class="section-title mt-5">
        <h3>인기 게시물</h3>
      </div>
      <div class="card text-white my-5 text-center">
        <popular-tab />
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  </div>
</template>

<script>
import CitySlide from "@/components/home/CitySlide";
import PopularTab from "@/components/home/PopularTab";
import Calendar from "@/components/schedule/Calendar";
export default {
  name: "home",
  components: {
    CitySlide,
    PopularTab,
    Calendar
  },
  data() {
    return {};
  },
};
</script>
