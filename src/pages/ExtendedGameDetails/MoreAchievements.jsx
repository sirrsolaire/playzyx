import { useOutletContext } from "react-router";

const MoreAchievements = () => {
  const { data } = useOutletContext();

  return <div className="flex flex-col items-center"></div>;
};

export default MoreAchievements;
