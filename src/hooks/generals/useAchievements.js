import { useQuery } from "@tanstack/react-query";
import { fetchAchievements } from "../../services/APIs/apiGame/apiAchievements.js";

const useAchievements = (slug) => {
  return useQuery({
    queryKey: ["achievement", slug],
    queryFn: () => fetchAchievements(slug),
  });
};

export default useAchievements;
