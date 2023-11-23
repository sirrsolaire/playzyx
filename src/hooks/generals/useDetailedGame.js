import { useQuery } from "@tanstack/react-query";
import { fetchDetailedGame } from "../../services/APIs/apiGame/apiDetailedGame.js";

const useDetailedGame = (slug) => {
  return useQuery({
    queryKey: ["detailedGame", slug],
    queryFn: () => fetchDetailedGame(slug),
  });
};

export default useDetailedGame;
