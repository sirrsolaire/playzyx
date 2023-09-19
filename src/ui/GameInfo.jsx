import {
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faEllipsis, faGift, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiNintendoswitch } from "react-icons/si";

function GameInfo({ name, image, meta, add, platforms }) {
  return (
    <div className="bg-game-info mb-3 rounded-xl">
      <img
        src={image}
        alt=""
        className="h-52 w-full rounded-t-xl object-cover object-center"
      />
      <div className="px-4 py-3">
        <div className="mb-1 flex items-center justify-between">
          <div className="mb-2 flex gap-2">
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
          <span className="rounded-[0.3rem] border-[1px] border-solid border-green-500 px-1 font-semibold text-green-500">
            {meta}
          </span>
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
      </div>
    </div>
  );
}

export default GameInfo;
