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
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: {
    OtherScheduleComponent,
  },
  setup() {
    const store = new useStore();
    onMounted(async () => {
      if (store.state.home.topSchedules == null) {
        await store.dispatch("home/getTopSchedules");
      }
    });
    const topSchedules = computed(() => {
      return store.state.home.topSchedules;
    });
    return { topSchedules };
  },
};
</script>

<style></style>
