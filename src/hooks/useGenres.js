import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchByGenre } from "../util/api.js";

const useGenres = ({ firstSelectValue, platform, genreId, tag }) => {
  return useInfiniteQuery({
    queryKey: ["genre", firstSelectValue, platform, genreId, tag],
    queryFn: ({ pageParam = 1 }) =>
      fetchByGenre(firstSelectValue, platform, pageParam, genreId, tag),
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
    },
  });
};

export default useGenres;
