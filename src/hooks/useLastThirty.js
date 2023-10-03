import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchLast30Games } from "../util/api.js";

const useLastThirty = ({ firstSelectValue, platform }) => {
  return useInfiniteQuery({
    queryKey: ["lastThirty", firstSelectValue, platform],
    queryFn: ({ pageParam = 1 }) =>
      fetchLast30Games(firstSelectValue, platform, pageParam),
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export default useLastThirty;
