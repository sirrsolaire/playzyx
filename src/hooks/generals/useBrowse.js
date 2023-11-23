import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBrowsePlatforms } from "../../services/APIs/apiGame/api.js";

const useBrowse = (browseType) => {
  return useInfiniteQuery({
    queryKey: ["browse", browseType],
    queryFn: ({ pageParam = 1 }) => fetchBrowsePlatforms(pageParam, browseType),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useBrowse;
