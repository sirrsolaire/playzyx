import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCreatorGames } from "../../services/APIs/apiGame/api.js";

const useCreatorGames = ({ firstSelectValue, id, platform }) => {
  return useInfiniteQuery({
    queryKey: ["creatorGames", firstSelectValue, id, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchCreatorGames(firstSelectValue, id, pageParam, platform),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useCreatorGames;
