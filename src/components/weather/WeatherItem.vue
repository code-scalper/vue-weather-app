<template>
  <li>
    <h3>{{ weather.label }}</h3>
    <p class="temperature">{{ weather.temperature }}&deg;c</p>
    <p class="info">
      <img :src="weather.icon" :alt="weather.label" />
      <span>습도 {{ weather.humidity }}</span>
      <span>바람 {{ weather.wind }}m/s</span>
    </p>
  </li>
</template>

<script>
export default {
  name: "WeatherItem",
  props: {
    weather: Object,
  },
};
</script>

<style scoped>
.weather-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  padding: 1em;
}
.weather-item h3 {
  font-size: 14px;
  color: #333;
}
.temperature {
  font-size: 36px;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.info img {
  width: 30px;
}
.info * {
  margin-right: 0.4em;
}
</style>
