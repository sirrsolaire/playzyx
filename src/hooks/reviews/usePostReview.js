import { postReview } from "../../util/apiSupabase.js";
import { useMutation } from "@tanstack/react-query";

export const usePostReview = () => {
  const { mutate: reviewMutate, isLoading: reviewPostLoading } = useMutation({
    mutationFn: (data) => postReview(data),
  });

  return { reviewMutate, reviewPostLoading };
};
