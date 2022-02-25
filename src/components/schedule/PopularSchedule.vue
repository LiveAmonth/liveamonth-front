<template>
  <div v-for="schedule in topSchedules" :key="schedule">
    <other-schedule-component>
      <template v-slot:profile-card>
        <user-profile-slot v-bind="schedule.member"></user-profile-slot>
      </template>
      <template v-slot:card-title>
        {{ schedule.title }}
      </template>
      <template v-slot:card-schedule>
        <!--        v-calendar에 schedule data 넣어야함-->
        <v-calendar />
      </template>
    </other-schedule-component>
    <div class="b-example-divider"></div>
  </div>
</template>

<script>
import "v-calendar/dist/style.css";
import OtherScheduleComponent from "@/components/schedule/OtherScheduleComponent";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import UserProfileSlot from "@/components/slot/UserProfileSlot";
export default {
  components: {
    OtherScheduleComponent,
    UserProfileSlot,
  },
  data() {
    return {};
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
  methods: {},
};
</script>

<style></style>
