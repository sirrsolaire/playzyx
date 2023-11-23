import { useMutation } from "@tanstack/react-query";
import { deleteFavouriteGame } from "../../services/APIs/apiSupabase/apiFavourite.js";

export const useDeleteFavourite = () => {
  const { mutate: deleteFavouriteMutate, isLoading: deleteFavouriteLoading } =
    useMutation({
      mutationFn: (data) => deleteFavouriteGame(data),
    });

  return { deleteFavouriteMutate, deleteFavouriteLoading };
};
