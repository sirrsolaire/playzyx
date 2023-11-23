import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/APIs/apiSupabase/apiAuth.js";

export const useRegister = (registerPayload) => {
  const { mutate: registerMutate, isLoading: registerLoading } = useMutation({
    mutationFn: () => register(registerPayload),
  });

  return { registerMutate, registerLoading };
};
