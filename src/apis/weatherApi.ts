import axios from "axios";

const API_KEY = "ce11b6c52899b8370598cc770b885399";
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

interface WeatherData {
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        units: "metric",
        lang: "kr",
        appid: API_KEY,
      },
    });
    const data = response.data;
    return {
      icon: data.weather[0].icon,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      description: data.weather[0].description,
    };
  } catch (error) {
    console.error("Failed to fetch weather data", error);
    throw error;
  }
};
