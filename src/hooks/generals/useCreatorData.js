import { useQuery } from "@tanstack/react-query";
import { fetchByCreatorId } from "../../services/APIs/apiGame/api.js";

const useCreatorData = (id) => {
  return useQuery({
    queryKey: ["creatorData", id],
    queryFn: () => fetchByCreatorId(id),
  });
};

export default useCreatorData;
