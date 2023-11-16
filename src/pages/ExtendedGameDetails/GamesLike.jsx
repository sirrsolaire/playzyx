import { useOutletContext } from "react-router";
import { TopNavigation } from "../../ui/DetailedGameInfo/TopNavigation.jsx";

const GamesLike = () => {
  const { data } = useOutletContext();
  return (
    <div className="flex flex-col items-center">
      <TopNavigation data={data} />
      <h2 className="text-center text-2xl font-semibold">
        Games-like {data?.name}
      </h2>
    </div>
  );
};

export default GamesLike;
