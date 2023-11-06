import { useMutation } from "@tanstack/react-query";
import { login } from "../../util/apiSupabase.js";

export const useLogin = (loginEmail, loginPassword) => {
  const { mutate: loginMutate, isLoading: loginLoading } = useMutation({
    mutationFn: () => login(loginEmail, loginPassword),
  });

  return { loginMutate, loginLoading };
};
