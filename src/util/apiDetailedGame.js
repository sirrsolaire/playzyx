import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchDetailedGame = async (slug) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`,
  );
  return response.data;
};
