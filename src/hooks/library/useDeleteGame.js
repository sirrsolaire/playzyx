import { useMutation } from "@tanstack/react-query";
import { deleteGame } from "../../util/apiSupabase.js";

export const useDeleteGame = () => {
  const { mutate: deleteMutate, isLoading: deleteLoading } = useMutation({
    mutationFn: (data) => deleteGame(data),
  });

  return { deleteMutate, deleteLoading };
};
