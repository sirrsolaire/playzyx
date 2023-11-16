import { useOutletContext } from "react-router";

const GamesLike = () => {
  const { data } = useOutletContext();
  return <div className="flex flex-col items-center"></div>;
};

export default GamesLike;
