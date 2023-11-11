import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../../util/apiSupabase.js";
import { useNavigate } from "react-router";

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutMutate, isLoading: logoutLoading } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries();
      // queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/", { replace: true });
    },
  });

  return { logoutMutate, logoutLoading };
};
