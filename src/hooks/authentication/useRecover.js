import { useMutation } from "@tanstack/react-query";
import { recoverPassword } from "../../services/APIs/apiSupabase/apiAuth.js";

export const useRecover = () => {
  const { mutate: recoverMutate, isLoading: recoverLoading } = useMutation({
    mutationFn: (data) => recoverPassword(data),
  });

  return { recoverMutate, recoverLoading };
};
