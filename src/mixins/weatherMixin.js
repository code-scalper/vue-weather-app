import axios from "axios";
const API_KEY = process.env.VUE_APP_API_KEY;
const weatherMixin = {
  data() {
    return {
      apiUrl: "https://api.openweathermap.org/data/2.5/weather",
      iconUrl: "http://openweathermap.org/img/wn/",
      iconExt: ".png",
    };
  },
  methods: {
    async getWeatherInfo(city) {
      const url = `${this.apiUrl}?q=${city.code}&appid=${API_KEY}`;
      const res = await axios.get(url);
      const weather = {
        wind: res.data.wind.speed,
        humidity: res.data.main.humidity,
        temperature: this.displayTemperature(res.data.main.temp),
        icon: this.getIconUrl(res.data.weather[0].icon),
        code: city.code,
        label: city.label,
      };
      return weather;
    },
    displayTemperature(temperature = 0, type = "celcius") {
      if (type === "celcius") {
        return (temperature - 273.15).toFixed(1);
      }
    },
    getIconUrl(icon) {
      return `${this.iconUrl}${icon || "13d"}${this.iconExt}`;
    },
  },
};

export default weatherMixin;
