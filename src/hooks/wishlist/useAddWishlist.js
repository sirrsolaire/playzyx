import { useMutation } from "@tanstack/react-query";
import { addToWishlist } from "../../services/APIs/apiSupabase/apiWishList.js";

export const useAddWishlist = () => {
  const { mutate: wishMutate, isLoading: wishLoading } = useMutation({
    mutationFn: (data) => addToWishlist(data),
  });

  return { wishMutate, wishLoading };
};
