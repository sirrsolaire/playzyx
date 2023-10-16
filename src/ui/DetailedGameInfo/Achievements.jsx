import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const Achievements = ({ data, achievementData }) => {
  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold underline underline-offset-2">
          {data?.name} achievements
        </h2>
        <span className="whitespace-nowrap text-sm underline underline-offset-2 opacity-40">
          {data?.achievements_count} achievements
        </span>
      </div>

      <ul className="mt-4">
        {achievementData?.map((item) => (
          <li
            key={item.id}
            className="flex gap-4 border-b-[1px] border-button-color py-4"
          >
            <img
              src={item.image}
              alt=""
              className="h-[48px] w-[48px] rounded-md"
            />
            <div className="flex flex-col">
              <span className="text-xs">{item.percent}%</span>
              <span className="mb-1 text-sm font-semibold">{item.name}</span>
              <p className="text-xs text-info-color">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-show-more text-info-color transition-colors duration-200 hover:bg-white hover:first:text-black">
          <FontAwesomeIcon icon={faEllipsis} className="text-2xl " />
        </div>
        <div className="flex flex-col gap-1">
          <span className="cursor-pointer text-sm font-semibold transition-all duration-200 hover:underline hover:opacity-50">
            view all achievements
          </span>
          <span className="text-xs text-info-color">
            {data?.achievements_count} items
          </span>
        </div>
      </div>
    </div>
  );
};
