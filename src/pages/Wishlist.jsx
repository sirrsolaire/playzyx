import ProfileInputFilter from "../ui/ProfileInputFilter.jsx";
import { useGetWishlist } from "../hooks/wishlist/useGetWishlist.js";
import { useState } from "react";
import ProfileGameItem from "../ui/ProfileGameItem.jsx";
import { Spinner } from "../ui/Spinner.jsx";

const Wishlist = () => {
  const { wishlistedGames, wishlistedGamesLoading } = useGetWishlist();
  const [queryWishList, setQueryWishList] = useState("");

  let filteredWishList = wishlistedGames;

  if (queryWishList.length > 0) {
    filteredWishList = filteredWishList.filter((game) =>
      game.name.toLowerCase().includes(queryWishList.toLowerCase()),
    );
  }

  return (
    <div className="px-1">
      <ProfileInputFilter
        placeholder="Search my wishlist"
        value={queryWishList}
        onChange={(e) => setQueryWishList(e.target.value)}
      />
      {wishlistedGamesLoading ? (
        <Spinner />
      ) : (
        <div className="mt-2 grid grid-cols-1 gap-3 smallTb:grid-cols-2 tablet:grid-cols-3">
          {filteredWishList?.map((game, i) => (
            <ProfileGameItem
              id={game.id}
              key={i}
              image={game.image}
              platform={
                game.platforms?.map((platform) => platform.platform?.name) || []
              }
              meta={game.meta}
              name={game.name}
              added={game.added}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
