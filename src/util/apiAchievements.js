import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchAchievements = async (slug) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${slug}/achievements?key=${API_KEY}&page_size=300`,
  );
  return response.data.results;
};
