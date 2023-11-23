import { useQuery } from "@tanstack/react-query";
import { fetchScreenShots } from "../../services/APIs/apiGame/apiScreenShots.js";

const useScreenShots = (slug) => {
  return useQuery({
    queryKey: ["screenShots", slug],
    queryFn: () => fetchScreenShots(slug),
  });
};

export default useScreenShots;
