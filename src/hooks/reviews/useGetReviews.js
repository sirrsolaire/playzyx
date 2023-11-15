import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../util/apiSupabase.js";

export const useGetReviews = () => {
  const { data: reviews, isLoading: reviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  return { reviews, reviewsLoading };
};
