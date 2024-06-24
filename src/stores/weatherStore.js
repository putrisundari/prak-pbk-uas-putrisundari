import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => {
    return {
      weatherWidgets: []
    };
  },
  actions: {
    fetchWeather: async function(location) {
      const apiKey = "054a54e25de265b4777d92f8a024adb8";
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }
        const weatherData = await response.json();
        this.weatherWidgets.push(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    },
    removeWidget: function(index) {
      if (index >= 0 && index < this.weatherWidgets.length) {
        this.weatherWidgets.splice(index, 1);
      }
    }
  }
});
