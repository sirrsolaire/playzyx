import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../../services/APIs/apiSupabase/apiAllGames.js";
import { useGetUser } from "../authentication/useGetUser.js";

export const useGetAllGames = () => {
  const { data: user } = useGetUser();
  const id = user?.id;
  const { data: games, isLoading: gamesLoading } = useQuery({
    queryKey: ["games"],
    queryFn: () => getAllGames(id),
  });

  return { games, gamesLoading };
};
