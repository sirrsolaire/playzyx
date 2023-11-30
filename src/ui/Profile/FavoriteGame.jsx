import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../reducers/modalSlice.js";
import { Platform } from "../Platform/Platform.jsx";
import { useDeleteFavourite } from "../../hooks/favouriteGames/useDeleteFavourite.js";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import RemoveItem from "../General/RemoveItem.jsx";

const FavoriteGame = ({ game }) => {
  const { deleteFavouriteMutate, deleteFavouriteLoading } =
    useDeleteFavourite();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(setSearchModal(true));
    document.body.classList.add("overflow-hidden");
  };

  const handleDeleteFavourite = () => {
    deleteFavouriteMutate(
      {
        id: game?.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["favouriteGames"]);
          successNotify(`You have removed ${game.name} from your favourite`);
        },
        onError: (err) => {
          generalError(err.message);
        },
      },
    );
  };

  if (!game)
    return (
      <div
        className="flex h-[300px] w-full cursor-pointer flex-col items-center justify-between rounded-lg bg-button-color py-3 transition-all duration-200 hover:bg-second-color
      "
        onClick={showModal}
      >
        <Icon
          icon="mingcute:add-fill"
          className="text-xl text-mobile-comment"
        />
        <span className="text-xl text-mobile-comment">Add Game</span>
      </div>
    );

  if (game)
    return (
      <div
        style={{ backgroundImage: `url('${game.image}')` }}
        className="relative h-[300px] w-full rounded-lg bg-cover bg-center bg-no-repeat "
      >
        <div className="absolute bottom-0 w-full rounded-b-lg bg-favourite-bg px-2 py-3">
          <div className="mb-1 flex items-center justify-between">
            <Platform
              platforms={game.platforms.map((game) => game.platform.name)}
              className="text-base text-white opacity-40"
            />
            {game.meta ? (
              <div className="flex h-full items-center justify-center rounded-[0.3rem] border-[1px] border-solid border-green-500 px-2 font-semibold text-green-500">
                <span>{game.meta}</span>
              </div>
            ) : null}
          </div>
          <Link to={`/games/details/${game.slug}`}>
            <span className="truncate text-xl font-semibold ">{game.name}</span>
          </Link>
          <div className="mt-2 flex items-center gap-1">
            {/*<span className="flex items-center gap-1 rounded-[0.3rem] bg-second-color px-2 font-semibold text-white">*/}
            {/*  <FontAwesomeIcon icon={faPlus} className="text-xs" /> {game.added}*/}
            {/*</span>*/}
            {/*<span className="group flex h-6 cursor-pointer items-center rounded-[0.3rem] bg-second-color px-2 transition-all duration-200 hover:bg-white">*/}
            <RemoveItem
              remove={handleDeleteFavourite}
              loading={deleteFavouriteLoading}
            />
            {/*<ProfilePopover*/}
            {/*  className="text-white transition-all duration-200 group-hover:text-black"*/}
            {/*  option2="Remove"*/}
            {/*  remove={handleDeleteFavourite}*/}
            {/*  loading={deleteFavouriteLoading}*/}
            {/*  showModal={showModal}*/}
            {/*/>*/}
            {/*</span>*/}
          </div>
        </div>
      </div>
    );
};

export default FavoriteGame;
