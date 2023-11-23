import { useUncategorized } from "../../hooks/library/useUncategorized.js";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import { useGetAllGames } from "../../hooks/library/useGetAllGames.js";
import { Icon } from "@iconify/react";
import { useQueryClient } from "@tanstack/react-query";
import GameDetailsDropDown from "./GameDetailsDropDown.jsx";
import { DownOutlined } from "@ant-design/icons";
import { useUpdateGames } from "../../hooks/library/useUpdateGames.js";
import { useDeleteGame } from "../../hooks/library/useDeleteGame.js";
import SmallSpinner from "../Loading/SmallSpinner.jsx";
import { useAddWishlist } from "../../hooks/wishlist/useAddWishlist.js";
import { useGetWishlist } from "../../hooks/wishlist/useGetWishlist.js";
import { useDeleteWishlist } from "../../hooks/wishlist/useDeleteWishlist.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";

export const AddToSection = ({ data }) => {
  const { data: user } = useGetUser();
  const { games } = useGetAllGames(); // read
  const { allGamesMutate } = useUncategorized(); //add
  const { updateMutate, updateLoading } = useUpdateGames(); //update
  const { deleteMutate, deleteLoading } = useDeleteGame(); //delete
  /////
  const { wishlistedGames } = useGetWishlist(); // read
  const { wishMutate, wishLoading } = useAddWishlist(); //add
  const { deleteWishMutate, deleteWishLoading } = useDeleteWishlist(); //delete
  /////
  const queryClient = useQueryClient();
  //////
  const getId = games?.map((game) => game.id);
  const gameAlreadyExists = getId?.includes(data?.id);
  /////
  const getStatus = games?.find((game) => game.name === data?.name)?.status;
  /////
  const isWishlisted = wishlistedGames
    ?.map((game) => game.name)
    .includes(data?.name);
  const isInLibrary = games?.map((game) => game.name).includes(data?.name);
  /////

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
    if (!isInLibrary) {
      allGamesMutate(
        {
          id: data.id,
          name: data.name,
          image: data.background_image,
          meta: data.metacritic,
          added: data.added,
          // platforms: data.platforms,
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
            name: data?.name,
            status: currentStatus,
            userId: user?.id,
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
        name: data?.name,
        userId: user?.id,
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

  const handleAddWishlist = () => {
    if (!isWishlisted) {
      wishMutate(
        {
          id: data.id,
          name: data.name,
          image: data.background_image,
          meta: data.metacritic,
          // platforms: data.platforms,
          added: data.added,
        },
        {
          onSuccess: () => {
            successNotify(`You have added ${data?.name} to your wishlist`);
            queryClient.invalidateQueries(["wishlist"]);
          },
          onError: (err) => {
            generalError(err.message);
          },
        },
      );
    } else {
      deleteWishMutate(
        {
          name: data?.name,
          userId: user?.id,
        },
        {
          onSuccess: () => {
            successNotify(`You have removed ${data?.name} from your wishlist`);
            queryClient.invalidateQueries(["wishlist"]);
          },
          onError: (err) => {
            generalError(err.message);
          },
        },
      );
    }
  };

  return (
    <div className="mt-5 flex items-center justify-center gap-2 tablet:justify-start">
      <GameDetailsDropDown
        data={games}
        handleSetStatus={handleAddGame}
        getStatus={getStatus}
      >
        <div
          className={`group flex w-56 cursor-pointer items-center justify-between rounded-lg  px-3 py-1 shadow-md transition-all duration-200 hover:bg-green-600 ${
            isInLibrary ? "bg-green-600" : "bg-white"
          }`}
        >
          <div
            className={`flex flex-col text-black transition-all duration-200 group-hover:text-white ${
              isInLibrary && "text-white"
            }`}
          >
            <span className="text-sm font-semibold opacity-50">
              {!isInLibrary ? "Add to" : "Added to"}
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
              {!isInLibrary ? (
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

      <div
        className={`
          flex w-56 cursor-pointer items-center justify-between rounded-lg border-2 px-3 py-1 shadow-md transition-all duration-200 hover:border-green-600 ${
            isWishlisted
              ? "border-green-600 hover:border-green-400"
              : "border-white"
          }
        `}
        onClick={handleAddWishlist}
      >
        <div className="flex flex-col text-white">
          <span className="text-sm font-semibold opacity-50">
            {isWishlisted ? "Added to" : "Add to"}
          </span>
          <span className="font-semibold">
            Wishlist{" "}
            <span className="font-normal opacity-50">
              {data?.added_by_status?.toplay}
            </span>
          </span>
        </div>
        {wishLoading || deleteWishLoading ? (
          <SmallSpinner color="white" />
        ) : (
          <Icon
            icon={`${
              isWishlisted ? "bi:check-circle-fill" : "teenyicons:gift-solid"
            }`}
            className={`text-2xl ${isWishlisted && "text-green-500"}`}
          />
        )}
      </div>
    </div>
  );
};
