import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { useUncategorized } from "../../hooks/library/useUncategorized.js";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import { useGetAllGames } from "../../hooks/library/useGetAllGames.js";
import { Icon } from "@iconify/react";
import { useQueryClient } from "@tanstack/react-query";
import GameDetailsDropDown from "../GameDetailsDropDown.jsx";
import { DownOutlined } from "@ant-design/icons";
import { useUpdateGames } from "../../hooks/library/useUpdateGames.js";
import { useDeleteGame } from "../../hooks/library/useDeleteGame.js";
import SmallSpinner from "../SmallSpinner.jsx";

export const AddToSection = ({ data }) => {
  const { allGamesMutate, allGamesLoading } = useUncategorized();
  const { updateMutate, updateLoading } = useUpdateGames();
  const { games, gamesLoading } = useGetAllGames();
  const { deleteMutate, deleteLoading } = useDeleteGame();
  const queryClient = useQueryClient();
  const getId = games?.map((game) => game.id);
  const gameAlreadyExists = getId?.includes(data?.id);
  const getStatus = games?.find((game) => game.id === data?.id)?.status;

  function handleShowStatus() {
    if (getStatus === "not_played") {
      return "Not played";
    } else if (getStatus === "uncategorized") {
      return "Uncategorized";
    } else if (getStatus === "currently_playing") {
      return "Currently playing";
    } else if (getStatus === "completed") {
      return "Completed";
    } else if (getStatus === "played") {
      return "Played";
    } else {
      return "My game";
    }
  }

  const handleAddGame = (currentStatus) => {
    if (!gameAlreadyExists) {
      allGamesMutate(
        {
          id: data.id,
          name: data.name,
          image: data.background_image,
          meta: data.metacritic,
          added: data.added,
          platforms: data.platforms,
          status: currentStatus,
        },
        {
          onSuccess: () => {
            successNotify(`You have added ${data.name} to your library`);
            queryClient.invalidateQueries(["games"]);
          },
          onError: (err) => {
            generalError(err.message);
          },
        },
      );
    } else {
      if (currentStatus !== getStatus) {
        updateMutate(
          {
            id: data.id,
            status: currentStatus,
          },
          {
            onSuccess: () => {
              successNotify(`Game status updated`);
              queryClient.invalidateQueries(["games"]);
            },
            onError: (err) => {
              generalError(err.message);
            },
          },
        );
      }
    }
  };

  const handleDeleteGame = () => {
    deleteMutate(
      {
        id: data.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["games"]);
          successNotify(`${data.name} has removed from your library`);
        },
        onError: (err) => {
          generalError(err.message);
        },
      },
    );
  };

  return (
    <div className="mt-5 flex items-center justify-center gap-2 tablet:justify-start">
      <GameDetailsDropDown
        data={games}
        handleAddGame={handleAddGame}
        getStatus={getStatus}
      >
        <div
          className={`group flex w-56 cursor-pointer items-center justify-between rounded-lg  px-3 py-1 shadow-md transition-all duration-200 hover:bg-green-600 ${
            gameAlreadyExists ? "bg-green-600" : "bg-white"
          }`}
        >
          <div
            className={`flex flex-col text-black transition-all duration-200 group-hover:text-white ${
              gameAlreadyExists && "text-white"
            }`}
          >
            <span className="text-sm font-semibold opacity-50">
              {!gameAlreadyExists ? "Add to" : "Added to"}
            </span>
            <div className="flex gap-2">
              <span className="font-semibold">{handleShowStatus()}</span>
              <DownOutlined className="mb-0.5 self-end" />
            </div>
          </div>

          {updateLoading || deleteLoading ? (
            <SmallSpinner color="white" />
          ) : (
            <div>
              {!gameAlreadyExists ? (
                <Icon
                  icon="octicon:feed-plus-16"
                  className="text-2xl text-black transition-all duration-200 group-hover:text-white"
                />
              ) : (
                <Icon
                  icon="bi:x-circle-fill"
                  className="text-2xl"
                  onClick={handleDeleteGame}
                />
              )}
            </div>
          )}
        </div>
      </GameDetailsDropDown>

      <div className="flex w-56 cursor-pointer items-center justify-between rounded-lg border-[1px] border-white px-3 py-1 shadow-md transition-all duration-200 hover:border-green-600">
        <div className="flex flex-col text-white">
          <span className="text-sm font-semibold opacity-50">Add to</span>
          <span className="font-semibold">
            Wishlist{" "}
            <span className="font-normal opacity-50">
              {data?.added_by_status.toplay}
            </span>
          </span>
        </div>
        <FontAwesomeIcon icon={faGift} className="text-2xl text-white" />
      </div>
    </div>
  );
};
