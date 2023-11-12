import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import useSearch from "../hooks/useSearch.js";
import { Platform } from "./Platform.jsx";
import { Icon } from "@iconify/react";
import { usePostFavourite } from "../hooks/favouriteGames/usePostFavourite.js";
import { useQueryClient } from "@tanstack/react-query";
import { setGameQuery, setSearchModal } from "../reducers/modalSlice.js";
import SmallSpinner from "./SmallSpinner.jsx";
import { useGetFavourite } from "../hooks/favouriteGames/useGetFavourite.js";
import { successNotify } from "../helpers/toaster/toast.js";

export const AddGameSearchResults = () => {
  const query = useSelector((state) => state.modal.addGameQuery);
  const { data, isLoading } = useSearch({ query });
  const { postFavourite, postFavouriteLoading } = usePostFavourite();
  const { favouriteGames } = useGetFavourite();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const getGameName = favouriteGames?.map((item) => item.name);

  const handlePostFavourite = (game) => {
    postFavourite(
      {
        name: game.name,
        image: game.background_image,
        meta: game.metacritic,
        added: game.added,
        platforms: game.platforms,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["favouriteGames"] });
          dispatch(setSearchModal(false));
          successNotify(`${game.name} added to your favourite`);
          document.body.classList.remove("overflow-hidden");
          dispatch(setGameQuery(""));
        },
      },
    );
  };

  if (query.length === 0) return;

  return (
    <div className="w-full rounded-3xl">
      <div className="flex items-center justify-center">
        {isLoading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["white", "white", "white", "white", "white"]}
          />
        )}
      </div>
      <ul className="text-white">
        {data?.map((game) => (
          <li
            className="flex cursor-pointer items-center gap-2 border-b-[1px] border-game-info  py-3 text-sm font-semibold"
            key={game.id}
          >
            <img
              src={game.background_image}
              alt=""
              className="h-28 w-24 rounded-lg object-cover object-center"
            />
            <div className="flex flex-col gap-1">
              <Platform
                platforms={game.platforms?.map((game) => game.platform.name)}
                className="text-sm"
              />
              <span className="text-xl">{game.name}</span>
              {getGameName?.includes(game.name) ? (
                <button className="flex w-fit items-center gap-2 rounded-md bg-green-700 px-2 py-1 transition-all duration-200 hover:bg-white hover:text-black">
                  <Icon icon="nimbus:check" className="text-xs" />
                  <span>Remove from Favorite</span>
                </button>
              ) : (
                <button
                  className="flex w-fit items-center gap-2 rounded-md bg-game-info px-2 py-1 transition-all duration-200 hover:bg-white hover:text-black"
                  onClick={() => handlePostFavourite(game)}
                >
                  {!postFavouriteLoading ? (
                    <>
                      <Icon icon="uiw:plus" className="text-xs" />
                      <span>Add to Favorite</span>
                    </>
                  ) : (
                    <SmallSpinner />
                  )}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
