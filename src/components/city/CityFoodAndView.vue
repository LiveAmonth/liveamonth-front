<template>
  <section class="agent-section spad">
    <div class="container">
      <div class="row">
        <title-slot>{{ $t("city.info.view") }}</title-slot>
      </div>
      <Carousel :autoplay="1800" :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="view in viewInfo()" :key="view">
          <div class="carousel__item card bg-white text-white">
            <img class="card-img" v-bind:src="translateViewImg(view.image)" />
            <div class="card-img-overlay">
              <div class="card-title">{{ view.content }}</div>
            </div>
          </div>
        </Slide>
      </Carousel>

      <div class="row mt-5">
        <title-slot>{{ $t("city.info.food") }}</title-slot>
      </div>
      <Carousel :autoplay="1600" :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="food in foodInfo()" :key="food">
          <div class="carousel__item card bg-white text-white">
            <img class="card-img" v-bind:src="translateFoodImg(food.image)" />
            <div class="card-img-overlay">
              <div class="card-title">{{ food.content }}</div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script>
import TitleSlot from "@/components/slot/TitleSlot";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "city-food-and-view",
  components: {
    TitleSlot,
    Carousel,
    Slide,
  },
  props: {
    foodsAndView: Object,
  },
  setup(props) {
    const foodInfo = () => {
      return props.foodsAndView.foodInfos;
    };
    const viewInfo = () => {
      return props.foodsAndView.viewInfos;
    };

    return { foodInfo, viewInfo };
  },
  methods: {
    translateFoodImg(image) {
      return require("@/assets/img/food/" + image);
    },
    translateViewImg(image) {
      return require("@/assets/img/view/" + image);
    },
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

.card-title {
  font-family: "Jua", sans-serif;
  text-shadow: 2px 2px 4px #5a5959;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 10px 2px;
  display: inline-block;
  background: rgba(0, 0, 0, 0);
  color: #ffffff;
  position: absolute;
  left: 10px;
  top: 10px;
}
.card {
  text-align: center;
  background: #ffffff;
  padding: 5px 10px 5px 10px;
  box-shadow: 0px 15px 15px rgba(91, 91, 91, 0.15);
}
</style>
