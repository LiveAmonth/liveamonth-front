<template>
  <Carousel :autoplay="3500" :itemsToShow="1.65" :wrapAround="true">
    <Slide v-for="data in this.slideInfos" :key="data">
      <div class="card carousel__item">
        <img
          :src="require('@/assets/img/intro/' + data.image)"
          class="card-img-top"
        />
        <div class="card-body">
          <figure>
            <h5 class="card-title">{{ $t("city.name." + data.name) }}</h5>
            <blockquote class="blockquote card-text">
              <p>
                <i class="bi bi-thermometer"></i> :
                {{ data.averageDegree }}&#8451; | <i class="bi bi-truck"></i> :
                {{ data.transportScore }}
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              자세한 정보가 궁금하시다면,
              <cite title="Source Title">
                <router-link to="#!"
                >{{ $t("city.name." + data.name) }}
                </router-link>
              </cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "city-slide",
  components: {
    Carousel,
    Slide
  },
  setup() {
    const store = new useStore();
    onMounted(async () => {
      if (!store.state.home.status.isData) {
        await store.dispatch("home/getSlideInfos");
      }
    });
    const slideInfos = computed(() => {
      return store.state.home.slideInfos;
    });
    return { slideInfos };
  },
};
</script>
<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(0.9);
  opacity: 0.5;
  transition: 0.5s;
}

.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);
}

.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
</style>
