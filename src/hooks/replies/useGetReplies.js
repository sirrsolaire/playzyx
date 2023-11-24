import { useQuery } from "@tanstack/react-query";
import { getReplies } from "../../services/APIs/apiSupabase/apiReplies.js";

export const useGetReplies = () => {
  const { data: replyData, isLoading: replyLoading } = useQuery({
    queryKey: ["replies"],
    queryFn: getReplies,
  });

  return { replyData, replyLoading };
};
