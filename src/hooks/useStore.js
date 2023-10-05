import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchStore } from "../util/api.js";

const useStore = ({ firstSelectValue, platform, tag, storeId }) => {
  return useInfiniteQuery({
    queryKey: ["store", firstSelectValue, platform, tag, storeId],
    queryFn: ({ pageParam = 1 }) =>
      fetchStore(firstSelectValue, platform, pageParam, tag, storeId),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useStore;
