import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfilePopover from "./ProfilePopover.jsx";
import { useDeleteGame } from "../../hooks/library/useDeleteGame.js";
import { useQueryClient } from "@tanstack/react-query";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import GameDetailsDropDown from "../DetailedGameInfo/GameDetailsDropDown.jsx";
import { useUpdateGames } from "../../hooks/library/useUpdateGames.js";
import { useGetAllGames } from "../../hooks/library/useGetAllGames.js";
import SmallSpinner from "../Loading/SmallSpinner.jsx";
import { useDeleteWishlist } from "../../hooks/wishlist/useDeleteWishlist.js";
import { useGetWishlist } from "../../hooks/wishlist/useGetWishlist.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";

const ProfileGameItem = ({ image, platform, meta, name, added, id }) => {
  const { games } = useGetAllGames();
  const { deleteMutate, deleteLoading } = useDeleteGame();
  const { updateMutate, updateLoading } = useUpdateGames();
  const { deleteWishMutate, deleteWishLoading } = useDeleteWishlist();
  const { wishlistedGames } = useGetWishlist();
  const queryClient = useQueryClient();
  const { data: user } = useGetUser();

  const getStatus = games?.find((game) => game.id === id)?.status;
  const isWishlisted = wishlistedGames?.map((game) => game.name).includes(name);

  const handleDeleteGame = () => {
    if (!isWishlisted) {
      deleteMutate(
        {
          name,
          userId: user?.id,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["games"]);
            successNotify(`You have removed ${name} from your library`);
          },
          onError: (err) => {
            generalError(err.message);
          },
        },
      );
    } else {
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
    }
  };

  const handleUpdateGame = (currentStatus) => {
    if (currentStatus !== getStatus) {
      updateMutate(
        {
          id,
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
  };

  return (
    <div className="relative">
      <img
        src={image}
        className="h-[200px] w-full rounded-lg object-cover object-center"
        alt={`Image of ${name}`}
      />
      <div className="absolute bottom-0 w-full rounded-b-lg bg-favourite-bg px-2 py-3 ">
        <div className="mb-1 flex flex-row-reverse items-center justify-between">
          {/*<Platform*/}
          {/*  platforms={platform}*/}
          {/*  className="text-base text-white opacity-40"*/}
          {/*/>*/}
          {meta ? (
            <div className="flex h-full items-center justify-center rounded-[0.3rem] border-[1px] border-solid border-green-500 px-2 font-semibold text-green-500">
              <span>{meta}</span>
            </div>
          ) : (
            <div />
          )}
          <h2 className="truncate text-xl font-semibold text-white opacity-70">
            {name}
          </h2>
        </div>
        <div className="mt-2 flex items-center gap-1">
          {!isWishlisted && (
            <GameDetailsDropDown handleSetStatus={handleUpdateGame}>
              <span className="group flex h-6 cursor-pointer items-center gap-1 rounded-[0.3rem] bg-second-color px-2 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black">
                {updateLoading ? (
                  <SmallSpinner color="white" />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-xs transition-all duration-200 group-hover:text-black"
                  />
                )}
                <span>{added}</span>
              </span>
            </GameDetailsDropDown>
          )}
          <span className="group flex h-6 cursor-pointer items-center rounded-[0.3rem] bg-second-color px-2 transition-all duration-200 hover:bg-white">
            <ProfilePopover
              className="text-white transition-all duration-200 group-hover:text-black"
              option2="Remove"
              remove={handleDeleteGame}
              loading={deleteLoading}
              loading2={deleteWishLoading}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileGameItem;
