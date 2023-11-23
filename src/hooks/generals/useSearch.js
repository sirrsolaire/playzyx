import { useQuery } from "@tanstack/react-query";
import { fetchGamesQuery } from "../../services/APIs/apiGame/api.js";

const useSearch = ({ query }) => {
  return useQuery({
    queryKey: ["filterGame", query],
    queryFn: () => fetchGamesQuery(query),
  });
};

export default useSearch;
