import { useMutation } from "@tanstack/react-query";
import { updateReview } from "../../services/APIs/apiSupabase/apiReviews.js";

export const useUpdateReview = () => {
  const { mutate: reviewUpdate, isLoading: reviewUpdateLoading } = useMutation({
    mutationFn: (data) => updateReview(data),
  });

  return { reviewUpdate, reviewUpdateLoading };
};
