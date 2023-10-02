import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { Platfroms } from "./Platfroms.jsx";
import useSearch from "../hooks/useSearch.js";

export const SearchResults = () => {
  const query = useSelector((state) => state.query.query);

  const { data, isLoading } = useSearch({ query });

  if (query.length === 0) return;

  return (
    <div className="absolute top-14 z-50 max-h-[600px] w-full overflow-scroll rounded-3xl bg-black py-5 shadow-2xl">
      <div className="flex items-center justify-center">
        {isLoading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["white", "white", "white", "white", "white"]}
          />
        )}
      </div>
      <ul className="text-white">
        {data?.map((game) => (
          <li
            key={game.id}
            className=" flex cursor-pointer items-center gap-2 px-5 py-2 text-sm font-semibold hover:bg-game-info"
          >
            <img
              src={game.background_image}
              alt=""
              className="h-14 w-10 rounded-lg object-cover object-center"
            />
            <div className="flex flex-col gap-1">
              <Platfroms
                platforms={game.platforms?.map((game) => game.platform.name)}
                className="text-xs"
              />
              <span>{game.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
