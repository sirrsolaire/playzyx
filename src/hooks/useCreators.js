import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCreators } from "../util/api.js";

const useCreators = () => {
  return useInfiniteQuery({
    queryKey: ["creators"],
    queryFn: ({ pageParam = 1 }) => fetchCreators(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useCreators;
