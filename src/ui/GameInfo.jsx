import {
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEllipsis,
  faGift,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SiNintendoswitch } from "react-icons/si";

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
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  const desiredDate = new Date(releasedDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = desiredDate.toLocaleDateString(undefined, options);

  return (
    <div className="m-auto mb-3 max-w-[500px] rounded-xl bg-game-info">
      <img
        src={image}
        alt=""
        className="h-250px rounded-t-xl object-cover object-center"
      />
      <div className="px-4 py-3">
        <div className="mb-1 flex items-center justify-between">
          <div className=" flex gap-2">
            {platforms.includes("Xbox One") && (
              <FontAwesomeIcon
                icon={faXbox}
                className=" text-base text-white opacity-40"
              />
            )}
            {platforms.includes("PlayStation 4") && (
              <FontAwesomeIcon
                icon={faPlaystation}
                className=" text-base text-white opacity-40"
              />
            )}
            {platforms.includes("Nintendo Switch") && (
              <SiNintendoswitch className=" text-base text-white opacity-40" />
            )}
            {platforms.includes("Linux") && (
              <FontAwesomeIcon
                icon={faLinux}
                className="text-base text-white opacity-40"
              />
            )}
            {platforms.includes("PC") && (
              <FontAwesomeIcon
                icon={faWindows}
                className="text-lg text-white opacity-40"
              />
            )}
          </div>
          <div className="flex h-full items-center justify-center rounded-[0.3rem] border-[1px] border-solid border-green-500 px-2 font-semibold text-green-500">
            <span>{meta}</span>
          </div>
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
        {open && (
          <div className="mt-5  flex flex-col  text-sm text-white ">
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
        <p
          className="mt-4 cursor-pointer text-center text-xs text-white underline underline-offset-2"
          onClick={handleOpen}
        >
          {!open ? "View More" : "View Less"}
        </p>
        {open && (
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
