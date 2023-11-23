import { useMutation } from "@tanstack/react-query";
import { updateEmail } from "../../services/APIs/apiSupabase/apiAuth.js";

export const useUpdateEmail = ({ newEmail }) => {
  const { mutate: emailMutate, isLoading: emailLoading } = useMutation({
    mutationFn: () => updateEmail({ newEmail }),
  });

  return { emailMutate, emailLoading };
};
