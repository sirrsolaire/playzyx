import { useQuery } from "@tanstack/react-query";
import { fetchStoreID } from "../util/api.js";

const useStoreId = () => {
  return useQuery({
    queryKey: ["storeId"],
    queryFn: fetchStoreID,
  });
};

export default useStoreId;
