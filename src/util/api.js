import axios from "axios";

const API_KEY = "180811e794e7469da0f0ff6adb017a60";

export const fetchGamesQuery = async (value) => {
  const response = await axios.get(
    `https://rawg.io/api/games?search=${value}&key=${API_KEY}`,
  );
  return response.data.results;
};

export const fetchPlatform = async (order, childPlatform,  pageParam ) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}&key=${API_KEY}
`,
  );
  return response.data;
};

export const fetchGame = async () => {
  const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`,
  );
  return response.data.results;
};

export const fetchReviews = async (gameId) => {
  const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}/reddit?key=${API_KEY}`,
  );
  return response.data.results;
};


