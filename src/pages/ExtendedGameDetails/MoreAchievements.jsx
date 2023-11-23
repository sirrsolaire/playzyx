import { useOutletContext, useParams } from "react-router";
import useAchievements from "../../hooks/useAchievements.js";
import { Spinner } from "../../ui/Spinner.jsx";
import NotFoundItem from "../../ui/NotFoundItem.jsx";

const MoreAchievements = () => {
  const { slug } = useParams();
  const { data } = useOutletContext();
  const { data: achievements, isLoading } = useAchievements(slug);

  if (!achievements?.length) {
    return <NotFoundItem gameName={data?.name} title="achievement" />;
  }

  if (isLoading) return <Spinner />;
  return (
    <ul className="mt-4">
      {achievements?.map((item) => (
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
  );
};

export default MoreAchievements;
