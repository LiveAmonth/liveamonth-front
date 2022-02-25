<template>
  <div v-for="(review, index) in topReviews" :key="index">
    <other-review-component>
      <template v-slot:profile-card>
        <user-profile-slot v-bind="review.member"></user-profile-slot>
      </template>
      <template v-slot:card-title>
        {{ review.title }}
      </template>
      <template v-slot:card-preview>
        {{ review.content }}
      </template>
    </other-review-component>
    <div class="b-example-divider"></div>
  </div>
</template>

<script>
import OtherReviewComponent from "@/components/review/OtherReviewComponent";
import UserProfileSlot from "@/components/slot/UserProfileSlot";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: {
    OtherReviewComponent,
    UserProfileSlot,
  },
  setup() {
    const store = new useStore();
    onMounted(async () => {
      if (store.state.home.topReviews == null) {
        await store.dispatch("home/getTopReviews");
      }
    });
    const topReviews = computed(() => {
      return store.state.home.topReviews;
    });
    return { topReviews };
  },
};
</script>

<style></style>
