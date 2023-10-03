import axios from "axios";

export const fetchByMonth = async (order, childPlatform, pageParam, month) => {
  const currentYear = new Date().getFullYear();

  const lastDayOfMonth = new Date(
    currentYear,
    parseInt(month, 10),
    0,
  ).getDate();

  const startDate = new Date(`${currentYear}-${month}-01T00:00:00Z`);
  const endDate = new Date(
    `${currentYear}-${month}-${lastDayOfMonth}T23:59:59Z`,
  );

  const startDateStr = startDate.toISOString().split("T")[0];
  const endDateStr = endDate.toISOString().split("T")[0];

  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${startDateStr},${endDateStr}&key=1a1a6d04d6e44a42a6cba36022b9c8fb&page=${pageParam}&page_size=20&ordering=${order}&platforms=${childPlatform}`,
  );
  return response.data;
};
