import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/APIs/apiSupabase/apiAuth.js";

export const useUpdateUser = (updatePayload) => {
  const { mutate: updateMutate, isLoading: updateLoading } = useMutation({
    mutationFn: () => updateUser(updatePayload),
  });

  return { updateMutate, updateLoading };
};
