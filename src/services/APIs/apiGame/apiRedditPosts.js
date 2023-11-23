import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchRedditPosts = async (slug) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${slug}/reddit?page_size=10&key=${API_KEY}`,
  );
  return response.data.results;
};
