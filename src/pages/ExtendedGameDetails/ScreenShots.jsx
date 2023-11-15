import { TopNavigation } from "../../ui/DetailedGameInfo/TopNavigation.jsx";
import useDetailedGame from "../../hooks/useDetailedGame.js";
import { useParams } from "react-router";

const ScreenShots = () => {
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);

  return (
    <div className="flex flex-col items-center">
      <TopNavigation data={data} />
      <h2 className="text-center text-2xl font-semibold">
        {data?.name} Screenshots
      </h2>
    </div>
  );
};

export default ScreenShots;
