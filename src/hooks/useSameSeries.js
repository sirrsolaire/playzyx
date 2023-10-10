import { useQuery } from "@tanstack/react-query";
import { fetchGameSeries } from "../util/apiSameGameSeries.js";

const useSameSeries = (slug) => {
  return useQuery({
    queryKey: ["sameSeries", slug],
    queryFn: () => fetchGameSeries(slug),
  });
};

export default useSameSeries;
