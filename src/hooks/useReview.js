import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../util/api.js";

const useReview = (gameId) => {
  return useQuery({
    queryKey: ["post", gameId],
    queryFn: () => fetchReviews(gameId),
  });
};

export default useReview;