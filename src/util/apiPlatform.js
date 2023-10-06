import axios from "axios";

export const fetchAllPlatform = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/platforms?&page_size=30&key=1a1a6d04d6e44a42a6cba36022b9c8fb`,
  );
  return response.data.results;
};
