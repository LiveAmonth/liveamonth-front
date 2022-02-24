<template>
  <div v-for="(review,index) in topReviews" :key="index">
    <other-review-component v-bind:idx="index">
      <template v-slot:card>
        <user-profile-card v-bind:card-info="review.member"></user-profile-card>
      </template>
      <template v-slot:cardTitle>
        {{ review.title }}
      </template>
      <template v-slot:cardPreview>
        {{ review.content }}
      </template>
    </other-review-component>
    <div class="b-example-divider"></div>
  </div>
</template>

<script>
import OtherReviewComponent from "@/components/review/OtherReviewComponent";
import UserProfileCard from "@/components/UserProfileCard";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: {
    OtherReviewComponent,
    UserProfileCard
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
  }
};
</script>

<style>

</style>
