import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { successNotify } from "../../helpers/toaster/toast.js";
import { logOut } from "../../services/APIs/apiSupabase/apiAuth.js";

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutMutate, isLoading: logoutLoading } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
      successNotify("You have logged out!");
    },
  });

  return { logoutMutate, logoutLoading };
};
