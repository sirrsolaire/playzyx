import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../util/apiSupabase.js";

export const useUpdatePassword = ({ newPassword }) => {
  const { mutate: passwordMutate, isLoading: passwordLoading } = useMutation({
    mutationFn: () => updatePassword({ newPassword }),
  });

  return { passwordMutate, passwordLoading };
};
