import { setupServer } from "msw/node";
import { fetchWeatherHandlers } from "../apis/weatherApi.mock";

export const server = setupServer(...fetchWeatherHandlers);
