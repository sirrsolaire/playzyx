import { TopNavigation } from "../../ui/DetailedGameInfo/TopNavigation.jsx";
import { useOutletContext } from "react-router";

const ScreenShots = () => {
  const { data } = useOutletContext();

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
