import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllGames } from "../../services/APIs/apiGame/api.js";

const useAllGames = ({ firstSelectValue, platform }) => {
  return useInfiniteQuery({
    queryKey: ["games", firstSelectValue, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchAllGames(firstSelectValue, platform, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useAllGames;
