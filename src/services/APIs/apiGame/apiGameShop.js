import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchEachStore = async (slug) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${slug}/stores?key=${API_KEY}`,
  );
  return response.data.results;
};
