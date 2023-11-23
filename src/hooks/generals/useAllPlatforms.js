import { useQuery } from "@tanstack/react-query";
import { fetchAllPlatform } from "../../services/APIs/apiGame/apiPlatform.js";

const useAllPlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchAllPlatform,
  });
};

export default useAllPlatforms;
