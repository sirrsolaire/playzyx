import { useQuery } from "@tanstack/react-query";
import { fetchGame } from "../../services/APIs/apiGame/api.js";

const useGame = () => {
  return useQuery({
    queryKey: ["game"],
    queryFn: fetchGame,
  });
};

export default useGame;
