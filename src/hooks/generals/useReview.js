import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../services/APIs/apiGame/api.js";

export const useReview = (slug) => {
  return useInfiniteQuery({
    queryKey: ["post", slug],
    queryFn: ({ pageParam = 1 }) => fetchReviews(slug, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useReview;
