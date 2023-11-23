import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../services/APIs/apiSupabase/apiReviews.js";

export const useGetReviews = () => {
  const { data: reviews, isLoading: reviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  return { reviews, reviewsLoading };
};
