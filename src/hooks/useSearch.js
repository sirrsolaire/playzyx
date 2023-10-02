import { useQuery } from "@tanstack/react-query";
import { fetchGamesQuery } from "../util/api.js";

const useSearch = ({ query }) => {
  return useQuery({
    queryKey: ["filterGame", query],
    queryFn: () => fetchGamesQuery(query),
  });
};

export default useSearch;
