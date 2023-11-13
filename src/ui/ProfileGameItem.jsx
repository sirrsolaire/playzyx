import { Platform } from "./Platform.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileGameItem = ({ image, platform, meta, name, added }) => {
  return (
    <div className="relative">
      <img
        src={image}
        className="h-[200px] w-full rounded-lg object-cover object-center"
        alt={`Image of ${name}`}
      />
      <div className="absolute bottom-0 w-full rounded-b-lg bg-favourite-bg px-2 py-3 ">
        <div className="mb-1 flex items-center justify-between">
          <Platform
            platforms={platform}
            className="text-base text-white opacity-40"
          />
          {meta ? (
            <div className="flex h-full items-center justify-center rounded-[0.3rem] border-[1px] border-solid border-green-500 px-2 font-semibold text-green-500">
              <span>{meta}</span>
            </div>
          ) : null}
        </div>
        <h2 className="truncate text-xl font-semibold text-white opacity-70">
          {name}
        </h2>
        <div className="mt-2 flex items-center gap-1">
          <span className="flex items-center gap-1 rounded-[0.3rem] bg-second-color px-2 font-semibold text-white">
            <FontAwesomeIcon icon={faPlus} className="text-xs" /> {added}
          </span>
          <span className="rounded-[0.3rem] bg-second-color px-2 ">
            <FontAwesomeIcon icon={faEllipsis} className="text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileGameItem;
