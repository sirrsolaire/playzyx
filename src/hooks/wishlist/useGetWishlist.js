import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../services/APIs/apiSupabase/apiWishList.js";
import { useGetUser } from "../authentication/useGetUser.js";

export const useGetWishlist = () => {
  const { data: user } = useGetUser();
  const id = user?.id;

  const { data: wishlistedGames, isLoading: wishlistedGamesLoading } = useQuery(
    {
      queryKey: ["wishlist"],
      queryFn: () => getWishlist(id),
      enabled: !!id,
    },
  );
  return { wishlistedGames, wishlistedGamesLoading };
};
