import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBrowsePlatforms } from "../util/api.js";

const useBrowse = (type) => {
  return useInfiniteQuery({
    queryKey: ["browse", type],
    queryFn: ({ pageParam = 1 }) => fetchBrowsePlatforms(pageParam, type),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useBrowse;
