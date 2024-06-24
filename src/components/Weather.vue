<template>
    <q-page class="column items-center justify-center q-pa-md">
      <div class="input-section">
        <q-input v-model="newLocation" label="Enter Location" filled class="input" />
        <q-btn @click="addWeatherWidget" round flat icon="add_circle" size="lg" color="secondary" />
      </div>
      <div class="widgets-section">
        <div
          v-for="(weather, index) in weatherStore.weatherWidgets"
          :key="index"
          class="weather-widget"
        >
          <q-icon :name="getWeatherIcon(weather.weather[0].main)" size="50px" class="weather-icon" />
          <div class="location">
            <h2>{{ weather.name }}</h2>
          </div>
          <div class="temperature">
            <p>{{ convertTemp(weather.main.temp) }}</p>
          </div>
          <div class="details">
            <p>{{ weather.weather[0].description }}</p>
            <p>Wind: {{ weather.wind.speed }} m/s</p>
            <p>Humidity: {{ weather.main.humidity }}%</p>
            <p>Feels Like: {{ convertTemp(weather.main.feels_like) }}</p>
          </div>
          <q-btn
            @click="removeWidget(index)"
            round flat icon="remove_circle" size="lg" color="negative"
          />
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { QPage, QInput, QBtn, QIcon } from "quasar";
  import { useWeatherStore } from "../stores/weatherStore";
  
  const weatherStore = useWeatherStore();
  
  const newLocation = ref("");
  
  const weatherIconMapping = {
    Clear: "wb_sunny",
    Clouds: "cloud",
    Rain: "grain",
    Drizzle: "grain",
    Thunderstorm: "flash_on",
    Snow: "ac_unit",
    Mist: "blur_on",
    Smoke: "blur_on",
    Haze: "blur_on",
    Dust: "blur_on",
    Fog: "blur_on",
    Sand: "blur_on",
    Ash: "blur_on",
    Squall: "blur_on",
    Tornado: "toys",
  };
  
  const convertTemp = (tempInCelsius) => {
    return `${tempInCelsius.toFixed(1)} °C / ${(
      (tempInCelsius * 9) / 5 +
      32
    ).toFixed(1)} °F`;
  };
  
  const getWeatherIcon = (weatherMain) => {
    return weatherIconMapping[weatherMain] || "wb_cloudy";
  };
  
  const addWeatherWidget = async () => {
    await weatherStore.fetchWeather(newLocation.value);
    newLocation.value = "";
  };
  
  const removeWidget = (index) => {
    weatherStore.removeWidget(index);
  };
  </script>
  
  <style scoped>
  .input-section {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding: 12px;
    background: linear-gradient(135deg, #e3f2fd, #bbdefb);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .input {
    flex: 1;
  }
  
  .widgets-section {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    padding: 24px;
    background: linear-gradient(135deg, #f1f8e9, #dcedc8);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .weather-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 260px;
    width: 100%;
    padding: 24px;
    background: linear-gradient(135deg, #ffffff, #f8f8f8);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    animation: fadeIn 0.5s ease;
  }
  
  .weather-widget:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .weather-widget h2 {
    font-size: 1.6em;
    margin: 12px 0;
    color: #1e88e5;
  }
  
  .weather-widget p {
    font-size: 1em;
    margin: 6px 0;
    color: #424242;
  }
  
  .weather-widget .temperature p {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 12px;
    color: #e53935;
  }
  
  .weather-widget .details p {
    font-size: 0.95em;
    margin: 4px 0;
  }
  
  .weather-icon {
    color: #ffeb3b;
    animation: rotate 2s infinite linear;
  }
  
  .q-btn {
    margin-top: 12px;
    background: linear-gradient(135deg, #ffeb3b, #fbc02d);
    color: #424242;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }
  
  .q-btn:hover {
    background: linear-gradient(135deg, #fbc02d, #f57f17);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  