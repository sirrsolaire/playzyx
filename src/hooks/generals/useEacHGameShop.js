import { useQuery } from "@tanstack/react-query";
import { fetchEachStore } from "../../services/APIs/apiGame/apiGameShop.js";

const useEachGameShop = (slug) => {
  return useQuery({
    queryKey: ["eachStore", slug],
    queryFn: () => fetchEachStore(slug),
  });
};

export default useEachGameShop;
