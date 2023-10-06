import { useQuery } from "@tanstack/react-query";
import { fetchAllPlatform } from "../util/apiPlatform.js";

const useAllPlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchAllPlatform,
  });
};

export default useAllPlatforms;
