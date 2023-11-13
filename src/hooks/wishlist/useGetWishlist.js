import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../util/apiSupabase.js";

export const useGetWishlist = () => {
  const { data: wishlistedGames, isLoading: wishlistedGamesLoading } = useQuery(
    {
      queryKey: ["wishlist"],
      queryFn: getWishlist,
    },
  );

  return { wishlistedGames, wishlistedGamesLoading };
};
