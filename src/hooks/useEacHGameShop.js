import { useQuery } from "@tanstack/react-query";
import { fetchEachStore } from "../util/apiGameShop.js";

const useEachGameShop = (slug) => {
  return useQuery({
    queryKey: ["eachStore", slug],
    queryFn: () => fetchEachStore(slug),
  });
};

export default useEachGameShop;
