import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router";

export const Achievements = ({ data, achievementData }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const slicedAchievement = achievementData?.slice(0, 5);
  return (
    <div className="mt-10 ">
      <h2 className="text-2xl font-semibold underline underline-offset-2">
        {data?.name} achievements
      </h2>

      <ul className="mt-4">
        {slicedAchievement?.map((item) => (
          <li
            key={item.id}
            className="flex gap-4 border-b-[1px] border-button-color py-4"
          >
            <img
              src={item.image}
              alt=""
              className="h-[48px] w-[48px] rounded-md object-cover object-center"
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
        <div className="peer flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-show-more text-info-color transition-colors duration-200 hover:bg-white hover:first:text-black">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-2xl "
            onClick={() => navigate(`/games/${slug}/more/achievements`)}
          />
        </div>
        <div className="flex flex-col gap-1 peer-hover:opacity-50">
          <span
            className="cursor-pointer text-sm font-semibold transition-all duration-200 hover:underline  "
            onClick={() => navigate(`/games/${slug}/more/achievements`)}
          >
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
