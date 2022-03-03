<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" :src="imagePath(details.image)" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ $t("city.name." + details.cityName) }}</h5>
          <p class="card-text">
            {{ details.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed, reactive } from "vue";

export default {
  name: "city-detail",
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  setup() {},
  methods: {
    imagePath(image) {
      return require("@/assets/img/intro/" + image);
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>
