import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchReviews } from "../util/api.js";

const useReview = (gameId) => {
  return useInfiniteQuery({
    queryKey: ["post", gameId],
    queryFn: ({ pageParam = 1 }) => fetchReviews(gameId, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useReview;
