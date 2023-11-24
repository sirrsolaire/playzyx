import { useMutation } from "@tanstack/react-query/src";
import { deleteReply } from "../../services/APIs/apiSupabase/apiReplies.js";

export const useDeleteReply = () => {
  const { mutate: deleteReplyMutate, isLoading: deleteReplyLoading } =
    useMutation({
      mutationFn: () => deleteReply(),
    });

  return { deleteReplyMutate, deleteReplyLoading };
};
