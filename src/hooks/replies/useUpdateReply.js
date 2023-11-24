import { useMutation } from "@tanstack/react-query/src";
import { updateReply } from "../../services/APIs/apiSupabase/apiReplies.js";

export const useUpdateReply = () => {
  const { mutate: updateReplyMutate, isLoading: updateReplyLoading } =
    useMutation({
      mutationFn: () => updateReply(),
    });

  return { updateReplyMutate, updateReplyLoading };
};
