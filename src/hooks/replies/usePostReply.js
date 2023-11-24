import { useMutation } from "@tanstack/react-query";
import { postReply } from "../../services/APIs/apiSupabase/apiReplies.js";

export const usePostReply = () => {
  const { mutate: postReplyMutate, isLoading: postReplyLoading } = useMutation({
    mutationFn: (data) => postReply(data),
  });

  return { postReplyMutate, postReplyLoading };
};
