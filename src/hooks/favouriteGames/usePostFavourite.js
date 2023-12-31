import { useMutation } from "@tanstack/react-query";
import { postFavouriteGames } from "../../services/APIs/apiSupabase/apiFavourite.js";

export const usePostFavourite = () => {
  const { mutate: postFavourite, isLoading: postFavouriteLoading } =
    useMutation({
      mutationFn: (data) => postFavouriteGames(data),
    });

  return { postFavourite, postFavouriteLoading };
};
