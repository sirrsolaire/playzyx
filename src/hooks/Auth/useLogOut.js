import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../../util/apiSupabase.js";

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const { mutate: logoutMutate, isLoading: logoutLoading } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { logoutMutate, logoutLoading };
};
