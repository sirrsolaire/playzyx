import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPlatform } from "../../services/APIs/apiGame/api.js";

const useGames = ({ firstSelectValue, platform }) => {
  return useInfiniteQuery({
    queryKey: ["games", firstSelectValue, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchPlatform(firstSelectValue, platform, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useGames;
