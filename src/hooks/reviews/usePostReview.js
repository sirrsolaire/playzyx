import { useMutation } from "@tanstack/react-query";
import { postReview } from "../../services/APIs/apiSupabase/apiReviews.js";

export const usePostReview = () => {
  const { mutate: reviewMutate, isLoading: reviewPostLoading } = useMutation({
    mutationFn: (data) => postReview(data),
  });

  return { reviewMutate, reviewPostLoading };
};
