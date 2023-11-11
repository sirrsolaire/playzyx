import { getFavouriteGames } from "../../util/apiSupabase.js";
import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../authentication/useGetUser.js";

export const useGetFavourite = () => {
  const { data: user } = useGetUser();
  const id = user?.id;
  const { data: favouriteGames, isLoading: favouriteLoading } = useQuery({
    queryKey: ["favouriteGames"],
    queryFn: () => getFavouriteGames(id),
  });

  return { favouriteGames, favouriteLoading };
};
