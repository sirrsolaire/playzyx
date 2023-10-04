import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../util/api.js";

const useTags = () => {
  return useQuery({
    queryKey: ["tag"],
    queryFn: fetchTags,
  });
};

export default useTags;
