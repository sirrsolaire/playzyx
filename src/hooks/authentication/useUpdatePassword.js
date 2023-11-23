import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../services/APIs/apiSupabase/apiAuth.js";

export const useUpdatePassword = ({ newPassword }) => {
  const { mutate: passwordMutate, isLoading: passwordLoading } = useMutation({
    mutationFn: () => updatePassword({ newPassword }),
  });

  return { passwordMutate, passwordLoading };
};
