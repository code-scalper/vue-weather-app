<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <CitySelector @setTargetCity="setTargetCity" />
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import weatherMixin from "@/mixins/weatherMixin";
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";
import WeatherList from "./WeatherList";

export default {
  name: "WeatherContent",
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  mixins: [weatherMixin],
  // 여기부터는 다음영상
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    async setTargetCity(city) {
      const add = city.selected;
      if (add) {
        // 날씨정보 추가

        const weather = await this.getWeatherInfo(city);
        this.weatherList.push(weather);
      } else {
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }

      console.log(this.weatherList);
    },
  },
};
</script>

<style></style>
