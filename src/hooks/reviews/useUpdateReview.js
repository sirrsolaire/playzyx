import { updateReview } from "../../util/apiSupabase.js";
import { useMutation } from "@tanstack/react-query";

export const useUpdateReview = () => {
  const { mutate: reviewUpdate, isLoading: reviewUpdateLoading } = useMutation({
    mutationFn: (data) => updateReview(data),
  });

  return { reviewUpdate, reviewUpdateLoading };
};
