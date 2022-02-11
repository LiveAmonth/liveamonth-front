<template>
  <div class="pd-text">
    <div class="pd-board">
      <div class="tab-board">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <button class="nav-link active" id="nav-schedule-tab" data-bs-toggle="tab" data-bs-target="#nav-schedule"
                    type="button" role="tab" aria-controls="nav-schedule" aria-selected="true">{{ $t("menu.schedule")}}
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button"
                    role="tab" aria-controls="nav-review" aria-selected="false">{{ $t("menu.review")}}
            </button>
          </li>
        </ul>
        <!-- Tab Contents -->
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-schedule" role="tabpanel" aria-labelledby="nav-schedule-tab">
            <PopularSchedule />
          </div>
          <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
            <PopularReview/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PopularSchedule from "@/components/home/PopularSchedule";
import PopularReview from "@/components/home/PopularReview";

export default {
  name: "popular-tab",
  components: {
    PopularSchedule,
    PopularReview
  }
};
</script>

<style>
</style>
