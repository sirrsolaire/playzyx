import { TopNavigation } from "../../ui/DetailedGameInfo/TopNavigation.jsx";
import { useOutletContext } from "react-router";

const MoreAchievements = () => {
  const { data } = useOutletContext();

  return (
    <div className="flex flex-col items-center">
      <TopNavigation data={data} />
      <h2 className="text-center text-2xl font-semibold">
        {data?.name} achievements
      </h2>
    </div>
  );
};

export default MoreAchievements;
