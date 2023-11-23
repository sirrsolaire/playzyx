import { useMutation } from "@tanstack/react-query";
import { deleteReview } from "../../services/APIs/apiSupabase/apiReviews.js";

export const useDeleteReview = () => {
  const { mutate: reviewDelete, isLoading: reviewDeleteLoading } = useMutation({
    mutationFn: (data) => deleteReview(data),
  });

  return { reviewDelete, reviewDeleteLoading };
};
