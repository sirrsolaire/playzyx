import { formattedNumber } from "../../helpers/numberFormatter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setBrowsePlatform,
  setPlatformName,
  setStore,
} from "../../reducers/browseSlice.js";

export const BrowseContentItem = ({
  name,
  image,
  gamesCount,
  games,
  slug,
  id,
}) => {
  const dispatch = useDispatch();
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image})`,
    borderRadius: 7,
  };

  return (
    <div
      className="flex h-fit flex-col items-center gap-4 bg-cover bg-center px-5 py-8 "
      style={containerStyle}
    >
      <NavLink to={`/games/${slug}`} className="text-center">
        <span
          className="cursor-pointer text-center text-2xl font-bold underline underline-offset-4 transition-colors duration-200 hover:text-gray-400"
          onClick={() => {
            dispatch(setStore(id));
            dispatch(setPlatformName(name));
            dispatch(setBrowsePlatform(id));
          }}
        >
          {name}
        </span>
      </NavLink>
      <h2 className="mt-8 flex w-full justify-between border-b-[1px] border-button-color pb-2">
        <span className="font-bold">Popular Items</span>
        <span className="text-sm text-info-color">
          {formattedNumber(gamesCount)}
        </span>
      </h2>
      <ul className="w-full space-y-1">
        {games.map((game) => (
          <li key={game.id} className="flex justify-between text-sm">
            <span className="cursor-pointer truncate  underline decoration-gray-600 decoration-0 underline-offset-2 transition-colors duration-200 hover:text-info-color">
              <Link to={`/games/details/${game.slug}`}>{game.name}</Link>
            </span>
            <div className="ml-4 flex items-center gap-1">
              <span className="text-info-color">
                {formattedNumber(game.added)}
              </span>
              <FontAwesomeIcon
                icon={faUser}
                className="text-xs text-info-color"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
