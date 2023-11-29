import { useMutation } from "@tanstack/react-query";
import { deleteReply } from "../../services/APIs/apiSupabase/apiReplies.js";

export const useDeleteReply = () => {
  const { mutate: deleteReplyMutate, isLoading: deleteReplyLoading } =
    useMutation({
      mutationFn: (data) => deleteReply(data),
    });

  return { deleteReplyMutate, deleteReplyLoading };
};
