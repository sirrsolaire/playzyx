import { useMutation } from "@tanstack/react-query";
import { addToWishlist } from "../../util/apiSupabase.js";

export const useAddWishlist = () => {
  const { mutate: wishMutate, isLoading: wishLoading } = useMutation({
    mutationFn: (data) => addToWishlist(data),
  });

  return { wishMutate, wishLoading };
};
