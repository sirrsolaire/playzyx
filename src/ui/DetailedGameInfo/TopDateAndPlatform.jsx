import { formatDate } from "../../helpers/dateFormat.js";
import { ParentPlatformsIcon } from "../ParentPlatformsIcon.jsx";

export const TopDateAndPlatform = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-4 tablet:flex-row">
      <div className="flex items-center justify-center gap-4">
        <span className="flex w-fit rounded bg-white px-2 text-base text-black">
          {formatDate(data?.released)}
        </span>
        <ul className="flex items-center gap-2 text-white">
          {data?.parent_platforms.map((platform, i) => (
            <ParentPlatformsIcon key={i} id={platform.platform.id} />
          ))}
        </ul>
      </div>
      <div className="text-center text-[13px] font-semibold tracking-widest ">
        AVERAGE PLAYTIME: {data?.playtime} HOURS
      </div>
    </div>
  );
};