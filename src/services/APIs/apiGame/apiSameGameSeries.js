import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchGameSeries = async (slug) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${slug}/game-series?key=${API_KEY}`,
  );
  return response.data.results;
};
