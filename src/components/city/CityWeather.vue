<template>
  <div></div>
  <!--  <div class="tab-details" th:with="cityWeathers=${cityInfos['cityWeathers']}">-->
  <!--    <ul class="left-table">-->
  <!--      <li>-->
  <!--        <span class="type-title">[[#{city.tab.weather.infoTitle}]]::[[#{${menu}}]]</span>-->
  <!--      </li>-->
  <!--      <li th:each="num : ${#numbers.sequence(0,5)}">-->
  <!--                                                        <span class="type-name"-->
  <!--                                                              th:text="#{${cityWeathers[num].month}}">월</span>-->
  <!--        <span class="type-value">[[#{city.tab.weather.avg}]] : [[${cityWeathers[num].average_degree}]]&#8451; | [[#{city.tab.weather.low}]] : [[${cityWeathers[num].min_degree}]]&#8451; | [[#{city.tab.weather.high}]] : [[${cityWeathers[num].max_degree}]]&#8451;</span>-->
  <!--      </li>-->
  <!--      <li><span class="type-footer"> &nbsp;</span></li>-->
  <!--    </ul>-->
  <!--    <ul class="right-table">-->
  <!--      <li><span class="type-title"> &nbsp;</span></li>-->
  <!--      <li th:each="num : ${#numbers.sequence(6,11)}">-->
  <!--                                                        <span class="type-name"-->
  <!--                                                              th:text="#{${cityWeathers[num].month}}">월</span>-->
  <!--        <span class="type-value">[[#{city.tab.weather.avg}]] : [[${cityWeathers[num].average_degree}]]&#8451; | [[#{city.tab.weather.low}]] : [[${cityWeathers[num].min_degree}]]&#8451; | [[#{city.tab.weather.high}]] : [[${cityWeathers[num].max_degree}]]&#8451;</span>-->
  <!--      </li>-->
  <!--      <li class="type-footer" th:text="#{city.tab.weather.source}">출처 표시</li>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "city-weather",
  components: {},
  props: {
    weathers: Array,
  },
};
</script>

<style></style>
