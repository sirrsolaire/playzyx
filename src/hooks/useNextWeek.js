import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchNextWeek } from "../util/api.js";

const useNextWeek = ({ firstSelectValue, platform }) => {
  return useInfiniteQuery({
    queryKey: ["games", firstSelectValue, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchNextWeek(firstSelectValue, platform, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useNextWeek;
