import { deleteReview } from "../../util/apiSupabase.js";
import { useMutation } from "@tanstack/react-query";

export const useUpdateReview = () => {
  const { mutate: reviewDelete, isLoading: reviewDeleteLoading } = useMutation({
    mutationFn: (data) => deleteReview(data),
  });

  return { reviewDelete, reviewDeleteLoading };
};
