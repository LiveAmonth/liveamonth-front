<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" :src="details.image" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ $t("city.name." + cityName) }}</h5>
          <p class="card-text">
            {{ details.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "city-detail",
  props: {
    cityName: String,
    details: Object,
  },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>
