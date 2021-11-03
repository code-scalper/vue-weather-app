<template>
  <div class="wrapper">
    <HeaderDisplay :userInfo="userInfo" />
    <WeatherContent />
  </div>
</template>

<script>
import HeaderDisplay from "./components/layouts/HeaderDisplay";
import WeatherContent from "./components/weather/WeatherContent";
export default {
  name: "App",
  components: {
    HeaderDisplay,
    WeatherContent,
  },
  data() {
    return {
      userInfo: {
        id: "Scalper",
        name: "Code Scalper",
      },
    };
  },
};
</script>

<style></style>
