import React, { useEffect, useState } from "react";
import { fetchWeather } from "../apis/weatherApi";
import { getWeatherIcon } from "../utils/weather";

interface WeatherData {
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherData = await fetchWeather("seoul");
        setWeather(weatherData);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    getWeather();
  }, []);

  return (
    <div className="flex justify-between items-center border-b p-4">
      <h1 className="text-xl font-bold">Seoul</h1>

      <div className="flex items-center h-[44px]">
        {weather ? (
          <>
            <img
              src={getWeatherIcon(weather.icon)}
              alt={weather.description}
              className="w-10 h-10"
            />
            <div className="ml-2 ">
              <div>{weather.temp}°C</div>
              <div className="text-sm text-gray-500">
                최저: {weather.temp_min}°C / 최고: {weather.temp_max}°C
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Weather;
