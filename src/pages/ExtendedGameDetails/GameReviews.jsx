import { useOutletContext } from "react-router";

const GameReviews = () => {
  const { data } = useOutletContext();
  return <div className="flex flex-col items-center"></div>;
};

export default GameReviews;
