import ProfileInputFilter from "../../ui/Profile/ProfileInputFilter.jsx";
import { useGetWishlist } from "../../hooks/wishlist/useGetWishlist.js";
import { useEffect, useState } from "react";
import ProfileGameItem from "../../ui/Profile/ProfileGameItem.jsx";
import { Spinner } from "../../ui/Loading/Spinner.jsx";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useDispatch } from "react-redux";
import { setWishList } from "../../reducers/profileSlice.js";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteWishlist } from "../../hooks/wishlist/useDeleteWishlist.js";

const Wishlist = () => {
  const { data: user } = useGetUser();
  const { wishlistedGames, wishlistedGamesLoading } = useGetWishlist();
  const [queryWishList, setQueryWishList] = useState("");
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { deleteWishMutate, deleteWishLoading } = useDeleteWishlist();

  let filteredWishList = wishlistedGames;
  if (filteredWishList) {
    filteredWishList = filteredWishList.filter(
      (game) => game.account_id === user?.id,
    );
  }

  if (queryWishList.length > 0) {
    filteredWishList = filteredWishList.filter((game) =>
      game.name.toLowerCase().includes(queryWishList.toLowerCase()),
    );
  }

  useEffect(() => {
    dispatch(setWishList(filteredWishList));
  }, [dispatch, filteredWishList]);

  const handleDelete = (name) => {
    deleteWishMutate(
      {
        name,
        userId: user?.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["wishlist"]);
          successNotify(`You have removed ${name} from your wishlist`);
        },
        onError: (err) => {
          generalError(err.message);
        },
      },
    );
  };

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
              handleDeleteGame={() => handleDelete(game.name)}
              wishLoading={deleteWishLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
