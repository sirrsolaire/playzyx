import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchStore } from "../../services/APIs/apiGame/api.js";

const useStore = ({ firstSelectValue, tag, itemId, browseType, platform }) => {
  return useInfiniteQuery({
    queryKey: ["store", firstSelectValue, tag, itemId, browseType, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchStore(
        firstSelectValue,
        pageParam,
        tag,
        itemId,
        browseType,
        platform,
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useStore;
