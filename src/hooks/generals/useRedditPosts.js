import { useQuery } from "@tanstack/react-query";
import { fetchRedditPosts } from "../../services/APIs/apiGame/apiRedditPosts.js";

const useRedditPosts = (slug) => {
  return useQuery({
    queryKey: ["reddit", slug],
    queryFn: () => fetchRedditPosts(slug),
  });
};

export default useRedditPosts;
