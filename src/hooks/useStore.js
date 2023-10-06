import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchStore } from "../util/api.js";

const useStore = ({ firstSelectValue, tag, itemId, browseType }) => {
  return useInfiniteQuery({
    queryKey: ["store", firstSelectValue, tag, itemId, browseType],
    queryFn: ({ pageParam = 1 }) =>
      fetchStore(firstSelectValue, pageParam, tag, itemId, browseType),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useStore;
