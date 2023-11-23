import { useMutation } from "@tanstack/react-query";
import { deleteWishlist } from "../../services/APIs/apiSupabase/apiWishList.js";

export const useDeleteWishlist = () => {
  const { mutate: deleteWishMutate, isLoading: deleteWishLoading } =
    useMutation({
      mutationFn: (data) => deleteWishlist(data),
    });

  return { deleteWishMutate, deleteWishLoading };
};
