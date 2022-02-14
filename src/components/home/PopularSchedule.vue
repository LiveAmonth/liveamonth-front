<template>
  <other-schedule-component>
    <template v-slot:card-title>
      @@@@에서의 한달살기 스케줄
    </template>
    <template v-slot:card-schedule>
      <v-calendar />
    </template>
  </other-schedule-component>
  <div class="b-example-divider"></div>
  <other-schedule-component>
    <template v-slot:card-title>
      @@@@에서의 한달살기 스케줄
    </template>
    <template v-slot:card-schedule>
      <v-calendar />
    </template>
  </other-schedule-component>
  <div class="b-example-divider"></div>
</template>

<script>
import 'v-calendar/dist/style.css';
import OtherScheduleComponent from "@/components/schedule/OtherScheduleComponent";

export default {
  name: "",
  components: {
    OtherScheduleComponent,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
