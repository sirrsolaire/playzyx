import axios from "axios";

const API_KEY = "1a1a6d04d6e44a42a6cba36022b9c8fb";

export const fetchGamesQuery = async (value) => {
  const response = await axios.get(
    `https://rawg.io/api/games?search=${value}&key=${API_KEY}`,
  );
  return response.data.results;
};

export const fetchPlatform = async (order, childPlatform, pageParam) => {
  const currentDate = new Date();
  const threeMonthsAgo = new Date(currentDate);
  threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
  const currentDateStr = currentDate.toISOString().split("T")[0];
  const threeMonthsAgoStr = threeMonthsAgo.toISOString().split("T")[0];

  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${threeMonthsAgoStr},${currentDateStr}&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}&key=${API_KEY}
`,
  );
  return response.data;
};

export const fetchAllGames = async (order, childPlatform, pageParam) => {
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

export const fetchLast30Games = async (order, childPlatform, pageParam) => {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date(currentDate - 30 * 24 * 60 * 60 * 1000);
  const currentDateStr = currentDate.toISOString().split("T")[0];
  const thirtyDaysAgoStr = thirtyDaysAgo.toISOString().split("T")[0];

  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${thirtyDaysAgoStr},${currentDateStr}&key=1a1a6d04d6e44a42a6cba36022b9c8fb&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}`,
  );
  return response.data;
};

export const fetchLastWeek = async (order, childPlatform, pageParam) => {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate - 7 * 24 * 60 * 60 * 1000);
  const currentDateStr = currentDate.toISOString().split("T")[0];
  const oneWeekAgoStr = oneWeekAgo.toISOString().split("T")[0];

  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${oneWeekAgoStr},${currentDateStr}&key=1a1a6d04d6e44a42a6cba36022b9c8fb&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}`,
  );
  return response.data;
};

export const fetchNextWeek = async (order, childPlatform, pageParam) => {
  const currentDate = new Date();
  const nextWeekStartDate = new Date(currentDate);
  nextWeekStartDate.setDate(currentDate.getDate() + 1);

  const nextWeekEndDate = new Date(currentDate);
  nextWeekEndDate.setDate(currentDate.getDate() + 7);

  const nextWeekStartDateStr = nextWeekStartDate.toISOString().split("T")[0];
  const nextWeekEndDateStr = nextWeekEndDate.toISOString().split("T")[0];

  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${nextWeekStartDateStr},${nextWeekEndDateStr}&key=1a1a6d04d6e44a42a6cba36022b9c8fb&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}`,
  );
  return response.data;
};

export const fetchByGenre = async (
  order,
  childPlatform,
  pageParam,
  genre,
  tag,
) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?&genres=${genre}&tags=${tag}&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}&key=${API_KEY}
`,
  );
  return response.data;
};

export const fetchTags = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/tags?page_size=20&key=${API_KEY}`,
  );
  return response.data.results;
};

export const fetchBrowsePlatforms = async (pageParam, type) => {
  const response = await axios.get(
    `https://api.rawg.io/api/${type}?page=${pageParam}&page_size=20&key=1a1a6d04d6e44a42a6cba36022b9c8fb`,
  );
  return response.data;
};

export const fetchCreators = async (pageParam) => {
  const response = await axios.get(
    `https://api.rawg.io/api/creators?page=${pageParam}&page_size=20&key=1a1a6d04d6e44a42a6cba36022b9c8fb`,
  );
  return response.data;
};

export const fetchStoreID = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/stores?&page_size=30&key=1a1a6d04d6e44a42a6cba36022b9c8fb`,
  );
  return response.data.results;
};

export const fetchStore = async (
  order,
  childPlatform,
  pageParam,
  tag,
  storeId,
) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?&tags=${tag}&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}&stores=${storeId}&key=${API_KEY}
`,
  );
  return response.data;
};
