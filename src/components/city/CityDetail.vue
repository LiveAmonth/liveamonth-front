<template>
  <div class="tab-desc">
    <div class="row">
      <div class="col-lg-4 col-md-6 mix">
        <div
          class="cityImg set-bg"
          v-bind:style="{ 'background-image': 'url(' + image + ')' }"
        >
          <div class="label">{{ $t("city.name." + cityName) }}</div>
        </div>
      </div>
      <div class="col-lg-8">
        <p class="cityText">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "city-detail",
  components: {},
  props: {
    cityName: String,
    content: String,
    image: String,
  },
  data() {
    return {};
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style></style>
