import { useQuery } from "@tanstack/react-query";
import { fetchDetailedGame } from "../util/apiDetailedGame.js";

const useDetailedGame = (slug) => {
  return useQuery({
    queryKey: ["detailedGame", slug],
    queryFn: () => fetchDetailedGame(slug),
  });
};

export default useDetailedGame;
