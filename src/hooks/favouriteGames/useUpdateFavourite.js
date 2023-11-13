import { useMutation } from "@tanstack/react-query";
import { updateFavouriteGame } from "../../util/apiSupabase.js";

export const useUpdateFavourite = () => {
  const { mutate: updateFavouriteMutate, isLoading: updateFavouriteLoading } =
    useMutation({
      mutationFn: (data) => updateFavouriteGame(data),
    });

  return { updateFavouriteMutate, updateFavouriteLoading };
};
