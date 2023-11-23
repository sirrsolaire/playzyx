import { useMutation } from "@tanstack/react-query";
import { deleteGame } from "../../services/APIs/apiSupabase/apiAllGames.js";

export const useDeleteGame = () => {
  const { mutate: deleteMutate, isLoading: deleteLoading } = useMutation({
    mutationFn: (data) => deleteGame(data),
  });

  return { deleteMutate, deleteLoading };
};
