import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../../util/apiSupabase.js";

export const useGetAllGames = () => {
  const { data: games, isLoading: gamesLoading } = useQuery({
    queryKey: ["games"],
    queryFn: getAllGames,
  });

  return { games, gamesLoading };
};
