<template>
  <div>
    <ul class="weather-list">
      <WeatherItem
        v-for="weather in weatherList"
        :key="weather.code"
        :weather="weather"
      />
    </ul>
  </div>
  <!-- mixin과 데이터 불러오기는 다음영상 -->
</template>

<script>
import WeatherItem from "./WeatherItem";
export default {
  name: "WeatherList",
  components: {
    WeatherItem,
  },
  props: {
    weatherList: Array,
  },
};
</script>

<style scoped>
.weather-list {
  display: grid;
  margin-top: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
