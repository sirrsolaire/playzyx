import { useMutation } from "@tanstack/react-query";
import { updateGames } from "../../services/APIs/apiSupabase/apiAllGames.js";

export const useUpdateGames = () => {
  const { mutate: updateMutate, isLoading: updateLoading } = useMutation({
    mutationFn: (data) => updateGames(data),
  });

  return { updateMutate, updateLoading };
};
