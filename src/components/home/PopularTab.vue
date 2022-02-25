<template>
  <title-slot class="mt-5">{{ $t("home.popularContent") }}</title-slot>
  <div class="card my-5">
    <tab-board-slot>
      <template v-slot:tab-button-1>
        <li class="nav-item">
          <button
            class="nav-link active"
            id="nav-schedule-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-schedule"
            type="button"
            role="tab"
            aria-controls="nav-schedule"
            aria-selected="true"
          >
            {{ $t("menu.schedule") }}
          </button>
        </li>
      </template>
      <template v-slot:tab-button-2>
        <li class="nav-item">
          <button
            class="nav-link"
            id="nav-review-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-review"
            type="button"
            role="tab"
            aria-controls="nav-review"
            aria-selected="false"
          >
            {{ $t("menu.review") }}
          </button>
        </li>
      </template>
      <template v-slot:tab-content-1>
        <div
          class="tab-pane fade show active"
          id="nav-schedule"
          role="tabpanel"
          aria-labelledby="nav-schedule-tab"
        >
          <popular-schedule />
        </div>
      </template>
      <template v-slot:tab-content-2>
        <div
          class="tab-pane fade"
          id="nav-review"
          role="tabpanel"
          aria-labelledby="nav-review-tab"
        >
          <popular-review />
        </div>
      </template>
    </tab-board-slot>
  </div>
</template>

<script>
import TitleSlot from "@/components/slot/TitleSlot";
import TabBoardSlot from "@/components/slot/TabBoardSlot";
import PopularSchedule from "@/components/schedule/PopularSchedule";
import PopularReview from "@/components/review/PopularReview";

export default {
  name: "popular-tab",
  components: {
    TitleSlot,
    TabBoardSlot,
    PopularSchedule,
    PopularReview,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
