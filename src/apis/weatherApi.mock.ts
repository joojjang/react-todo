import { rest } from "msw";

export const fetchWeatherHandlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      return res(
        ctx.json({
          weather: [{ icon: "10d", description: "rain" }],
          main: { temp: 20, temp_min: 15, temp_max: 25 },
        })
      );
    }
  ),
];
