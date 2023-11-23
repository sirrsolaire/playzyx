import axios from "axios";
import { API_KEY } from "./api.js";

export const fetchAllPlatform = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/platforms?&page_size=30&key=${API_KEY}`,
  );
  return response.data.results;
};
