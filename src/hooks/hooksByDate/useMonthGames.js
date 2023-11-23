import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchByMonth } from "../../services/APIs/apiGame/apiByCalendar.js";

const useMonthGames = ({ firstSelectValue, platform, monthNo }) => {
  return useInfiniteQuery({
    queryKey: ["games", firstSelectValue, platform, monthNo],
    queryFn: ({ pageParam = 1 }) =>
      fetchByMonth(firstSelectValue, platform, pageParam, monthNo),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useMonthGames;
