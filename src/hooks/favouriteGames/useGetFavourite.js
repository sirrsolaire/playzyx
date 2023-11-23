import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../authentication/useGetUser.js";
import { getFavouriteGames } from "../../services/APIs/apiSupabase/apiFavourite.js";

export const useGetFavourite = () => {
  const { data: user } = useGetUser();
  const id = user?.id;
  const { data: favouriteGames, isLoading: favouriteLoading } = useQuery({
    queryKey: ["favouriteGames"],
    queryFn: () => getFavouriteGames(id),
  });

  return { favouriteGames, favouriteLoading };
};
