import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchLastWeek } from "../../services/APIs/apiGame/api.js";

const useThisWeek = ({ firstSelectValue, platform }) => {
  return useInfiniteQuery({
    queryKey: ["games", firstSelectValue, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchLastWeek(firstSelectValue, platform, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useThisWeek;
