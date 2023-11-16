import { useOutletContext } from "react-router";
import { TopNavigation } from "../../ui/DetailedGameInfo/TopNavigation.jsx";

const RedditPosts = () => {
  const { data } = useOutletContext();
  return (
    <div className="flex flex-col items-center">
      <TopNavigation data={data} />
      <h2 className="text-center text-2xl font-semibold">
        {data?.name} reddit posts
      </h2>
    </div>
  );
};

export default RedditPosts;
