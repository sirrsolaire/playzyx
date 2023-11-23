import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import useSearch from "../../hooks/generals/useSearch.js";
import { Platform } from "../Platform/Platform.jsx";
import { Link } from "react-router-dom";

export const SearchResults = () => {
  const query = useSelector((state) => state.query.query);
  const { data, isLoading } = useSearch({ query });

  if (query.length === 0) return;

  return (
    <div className="fixed left-0 top-14 z-50 h-screen w-full overflow-scroll  bg-black py-5 shadow-2xl tablet:absolute tablet:max-h-[600px] tablet:rounded-lg ">
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
          <Link to={`/games/details/${game.slug}`} key={game.id}>
            <li className=" flex cursor-pointer items-center gap-2 px-5 py-2 text-sm font-semibold hover:bg-game-info">
              <img
                src={game.background_image}
                alt=""
                className="h-14 w-10 rounded-lg object-cover object-center"
              />
              <div className="flex flex-col gap-1">
                <Platform
                  platforms={game.platforms?.map((game) => game.platform.name)}
                  className="text-xs"
                />
                <span>{game.name}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
