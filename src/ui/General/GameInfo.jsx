import { useEffect, useState } from "react";
import { Platform } from "../Platform/Platform.jsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAddWishlist } from "../../hooks/wishlist/useAddWishlist.js";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import { useQueryClient } from "@tanstack/react-query";
import SmallSpinner from "../Loading/SmallSpinner.jsx";
import { Icon } from "@iconify/react";
import { useGetWishlist } from "../../hooks/wishlist/useGetWishlist.js";
import { useDeleteWishlist } from "../../hooks/wishlist/useDeleteWishlist.js";
import { useUncategorized } from "../../hooks/library/useUncategorized.js";
import { useGetAllGames } from "../../hooks/library/useGetAllGames.js";
import { useDeleteGame } from "../../hooks/library/useDeleteGame.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../../public/images/placeholder.jpg";

function GameInfo({
  name,
  image,
  meta,
  add,
  platforms,
  releasedDate,
  genres,
  rating,
  slug,
  id,
}) {
  const layout = useSelector((state) => state.layout.layout);
  const [open, setOpen] = useState(window.innerWidth > 980);
  const { wishMutate, wishLoading } = useAddWishlist();
  const { deleteWishMutate, deleteWishLoading } = useDeleteWishlist();
  const { wishlistedGames } = useGetWishlist();
  const { allGamesMutate, allGamesLoading } = useUncategorized();
  const { games } = useGetAllGames();
  const { deleteMutate, deleteLoading } = useDeleteGame();
  const queryClient = useQueryClient();
  const desiredDate = new Date(releasedDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = desiredDate.toLocaleDateString(undefined, options);
  const isWishlisted = wishlistedGames?.map((game) => game.name).includes(name);
  const isInLibrary = games?.map((game) => game.name).includes(name);
  const { data: user } = useGetUser();
  const navigate = useNavigate();

  function handleOpen() {
    setOpen(!open);
  }

  useEffect(() => {
    function handleResize() {
      setOpen(window.innerWidth > 980);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddWishList = () => {
    if (!isWishlisted) {
      wishMutate(
        {
          id,
          name,
          image,
          meta,
          added: add,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["wishlist"]);
            successNotify(`You have added ${name} to your wishlist`);
          },
          onError: (err) => {
            generalError(err.message());
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
        },
      );
    }
  };

  const handleAddLibrary = () => {
    if (!isInLibrary) {
      allGamesMutate(
        {
          id,
          name,
          image,
          meta,
          added: add,
          status: "uncategorized",
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["games"]);
            successNotify(`You have added ${name} to your library`);
          },
        },
      );
    } else {
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
        },
      );
    }
  };

  const handleNavigate = () => {
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <div
      className={`m-auto mb-3 flex h-fit max-w-[500px] flex-col  rounded-xl bg-game-info tablet:m-0 tablet:max-w-[400px] tablet:pb-2 ${
        layout === "box"
          ? "tablet:m-auto tablet:max-w-[600px] desktopFirst:min-w-[700px] desktopSecond:min-w-[750px]"
          : "tablet:transition tablet:duration-300 tablet:hover:scale-[1.03] tablet:hover:ease-in-out"
      }`}
    >
      <LazyLoadImage
        placeholderSrc={placeholder}
        onClick={() => navigate(`/games/details/${slug}`)}
        src={image}
        effect="blur"
        alt={`Image of ${name}`}
        className={`h-250px cursor-pointer rounded-t-xl object-cover object-center tablet:h-[200px] tablet:w-full ${
          layout === "box" && "min-h-[350px] tablet:object-top"
        }`}
      />

      <div className="px-4 py-3">
        <div className="mb-1 flex items-center justify-between">
          <Platform
            platforms={platforms}
            className="text-base text-white opacity-40"
          />

          {meta ? (
            <div className="flex h-[30px] items-center justify-center rounded-[0.3rem] border-[1px] border-solid border-green-500 px-2 font-semibold text-green-500">
              <span>{meta}</span>
            </div>
          ) : (
            <div className="h-[30px]"></div>
          )}
        </div>
        <NavLink to={`/games/details/${slug}`}>
          <span className="block truncate text-2xl font-bold text-white">
            {name}
          </span>
        </NavLink>
        <div className="mt-2 flex items-center gap-1">
          <span
            onClick={() => {
              handleAddLibrary();
              handleNavigate();
            }}
            className={`
              group flex h-7 cursor-pointer items-center gap-1.5 rounded-[0.3rem]  px-2 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black ${
                isInLibrary && user ? "bg-green-600" : "bg-second-color"
              }
            `}
          >
            {deleteLoading || allGamesLoading ? (
              <SmallSpinner color="black" />
            ) : (
              <Icon
                icon="fontisto:plus-a"
                className="text-white transition-all duration-200
            group-hover:text-black"
              />
            )}
            <span>{add}</span>
          </span>
          <span
            className="group flex h-7 cursor-pointer items-center rounded-[0.3rem] bg-second-color px-2 transition-all duration-200 hover:bg-white"
            onClick={() => {
              handleAddWishList();
              handleNavigate();
            }}
          >
            {wishLoading || deleteWishLoading ? (
              <SmallSpinner color="black" />
            ) : (
              <Icon
                icon={`${
                  isWishlisted && user
                    ? "bi:check-circle-fill"
                    : "teenyicons:gift-solid"
                }`}
                className={`text-xl transition-all duration-200 group-hover:text-black ${
                  isWishlisted && user && "text-green-500"
                }`}
              />
            )}
          </span>
        </div>
        {open && layout === "grid" && (
          <div className={`mt-5 flex flex-col text-sm text-white`}>
            <div className="flex items-center justify-between border-b-[1px] border-border-color py-3">
              <span className="text-info-color">Release date:</span>
              <span className="text-xs">{formattedDate}</span>
            </div>
            <div className="flex items-center justify-between border-b-[1px] border-border-color py-3">
              <span className="text-info-color">Genres:</span>
              <span className="text-xs">{genres.slice(0, 4).join(", ")}</span>
            </div>
            <div className="flex items-center justify-between border-b-[1px] border-border-color py-3">
              <span className="text-info-color">Rating:</span>
              <span className="text-xs">{rating}</span>
            </div>
          </div>
        )}
        {layout === "box" && (
          <div className="mt-7 flex flex-col gap-3">
            <div className="flex flex-wrap gap-6 text-sm text-white">
              <div className="flex items-center gap-1">
                <span className="text-info-color">Release date:</span>
                <span className="text-ms">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-info-color">Genres:</span>
                <span className="text-ms ">{genres.join(", ")}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-info-color">Rating:</span>
                <span className="text-ms">{rating}</span>
              </div>
            </div>
          </div>
        )}
        <p
          className="mt-4 cursor-pointer text-center text-xs text-white underline underline-offset-2 tablet:hidden"
          onClick={handleOpen}
        >
          {layout === "grid" && (
            <span>{!open ? "View More" : "View Less"}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default GameInfo;
