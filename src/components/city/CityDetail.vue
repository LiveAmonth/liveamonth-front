<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" :src="translateIntroImg.img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ $t("city.name." + cityName) }}</h5>
          <p class="card-text">
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  name: "city-detail",
  components: {},
  props: {
    cityName: String,
    content: String,
    image: String,
  },
  data() {
    return {
      imagePath: "",
    };
  },
  setup(props) {
    const state = reactive({
      cityName: computed(() => props.cityName),
      content: computed(() => props.content),
      image: computed(() => props.image),
    });
    return { state };
  },
  created() {},
  computed: {
    translateIntroImg() {
      return {
        img: this.image && require(`@/assets/img/intro/${this.state.image}`),
      };
    },
  },
  methods: {},
};
</script>

<style scoped>
.card {
  border: none;
}
</style>
