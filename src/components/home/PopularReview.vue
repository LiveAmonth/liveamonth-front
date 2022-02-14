<template>
  <other-review-component>
    <template v-slot:card-title>
      @@@@@@@@@게시판!!
    </template>
    <template v-slot:card-preview>
      1번 미리보기 내용입니다@@@@@@@@@@@@@@@@@@@
    </template>
  </other-review-component>
  <div class="b-example-divider"></div>
  <other-review-component>
    <template v-slot:card-title>
      @@@@@@@@@게시판!!
    </template>
    <template v-slot:card-preview>
      2번 미리보기 내용입니다@@@@@@@@@@@@@@@@@@@
    </template>
  </other-review-component>
  <div class="b-example-divider"></div>
</template>

<script>
import OtherReviewComponent from "@/components/review/OtherReviewComponent";

export default {
  name: "",
  components: { OtherReviewComponent },
  data() {
    return {};
  },
};
</script>

<style></style>
