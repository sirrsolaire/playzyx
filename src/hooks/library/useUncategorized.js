import { useMutation } from "@tanstack/react-query";
import { postAllGames } from "../../util/apiSupabase.js";

export const useUncategorized = () => {
  const { mutate: allGamesMutate, isLoading: allGamesLoading } = useMutation({
    mutationFn: (data) => postAllGames(data),
  });

  return { allGamesLoading, allGamesMutate };
};
