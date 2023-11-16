import { useOutletContext } from "react-router";

const RedditPosts = () => {
  const { data } = useOutletContext();
  return <div className="flex flex-col items-center"></div>;
};

export default RedditPosts;
