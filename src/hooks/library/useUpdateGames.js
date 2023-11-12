import { useMutation } from "@tanstack/react-query";
import { updateGames } from "../../util/apiSupabase.js";

export const useUpdateGames = () => {
  const { mutate: updateMutate, isLoading: updateLoading } = useMutation({
    mutationFn: (data) => updateGames(data),
  });

  return { updateMutate, updateLoading };
};
