import {
  faChevronRight,
  faEllipsis,
  faGift,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Platform } from "./Platform.jsx";
import { useSelector } from "react-redux";

function GameInfo({
  name,
  image,
  meta,
  add,
  platforms,
  releasedDate,
  genres,
  rating,
}) {
  const layout = useSelector((state) => state.layout.layout);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  const desiredDate = new Date(releasedDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = desiredDate.toLocaleDateString(undefined, options);

  return (
    <div
      className={`m-auto mb-3 flex h-fit max-w-[500px] flex-col  rounded-xl bg-game-info tablet:m-0 tablet:max-w-[400px] tablet:pb-2 ${
        layout === "box"
          ? "tablet:m-auto tablet:max-w-[600px] desktopFirst:min-w-[700px] desktopSecond:min-w-[750px]"
          : "tablet:transition tablet:duration-300 tablet:hover:scale-[1.03] tablet:hover:ease-in-out"
      }`}
    >
      <img
        src={image}
        alt=""
        className={`h-250px rounded-t-xl object-cover object-center tablet:h-[200px] tablet:w-full ${
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
            <div className="flex h-full items-center justify-center rounded-[0.3rem] border-[1px] border-solid border-green-500 px-2 font-semibold text-green-500">
              <span>{meta}</span>
            </div>
          ) : null}
        </div>
        <span className="block text-2xl font-bold text-white">{name}</span>
        <div className="mt-2 flex items-center gap-1">
          <span className="flex items-center gap-1 rounded-[0.3rem] bg-second-color px-2 font-semibold text-white">
            <FontAwesomeIcon icon={faPlus} className="text-xs" /> {add}
          </span>
          <span className="rounded-[0.3rem] bg-second-color px-2">
            <FontAwesomeIcon icon={faGift} className="text-white" />
          </span>
          <span className="rounded-[0.3rem] bg-second-color px-2 ">
            <FontAwesomeIcon icon={faEllipsis} className="text-white" />
          </span>
        </div>
        {open && layout === "grid" && (
          <div className="  mt-5 flex flex-col text-sm text-white">
            <div className="flex items-center justify-between border-b-[1px] border-border-color py-3">
              <span className="text-info-color">Release date:</span>
              <span className="text-xs">{formattedDate}</span>
            </div>
            <div className="flex items-center justify-between border-b-[1px] border-border-color py-3">
              <span className="text-info-color">Genres:</span>
              <span className="text-xs ">{genres.join(", ")}</span>
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
            {layout === "box" && (
              <div className="flex max-w-fit cursor-pointer items-center gap-2 rounded-lg bg-border-color px-4 py-2.5 text-sm font-semibold tracking-normal text-white">
                <span>Show more like this</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xl text-info-color opacity-60"
                />
              </div>
            )}
          </div>
        )}

        <p
          className="mt-4 cursor-pointer text-center text-xs text-white underline underline-offset-2"
          onClick={handleOpen}
        >
          {layout === "grid" && (
            <span>{!open ? "View More" : "View Less"}</span>
          )}
        </p>
        {open && layout === "grid" && (
          <p className="mt-4 flex cursor-pointer items-center justify-between rounded-lg bg-border-color px-4 py-2.5 text-sm font-semibold tracking-normal text-white">
            Show more like this
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xl text-info-color opacity-60"
            />
          </p>
        )}
      </div>
    </div>
  );
}

export default GameInfo;
