import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../util/apiSupabase.js";

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { data, isLoading };
};
