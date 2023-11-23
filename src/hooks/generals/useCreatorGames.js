import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCreatorGames } from "../../services/APIs/apiGame/api.js";

const useCreatorGames = ({ firstSelectValue, id }) => {
  return useInfiniteQuery({
    queryKey: ["creatorGames", firstSelectValue, id],
    queryFn: ({ pageParam = 1 }) =>
      fetchCreatorGames(firstSelectValue, id, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useCreatorGames;
