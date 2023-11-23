import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchScreenShots = async (slug) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${slug}/screenshots?key=${API_KEY}`,
  );
  return response.data.results;
};
