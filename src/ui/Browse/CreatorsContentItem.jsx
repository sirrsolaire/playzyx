import { formattedNumber } from "../../helpers/numberFormatter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholderAvatar from "../../../public/images/default-user.jpg";

export const CreatorsContentItem = ({
  name,
  image,
  gamesCount,
  games,
  avatar,
  positions,
  id,
}) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image})`,
    borderRadius: 7,
  };

  return (
    <div
      className="flex h-fit flex-col items-center gap-4 bg-cover bg-center px-5 py-8 "
      style={containerStyle}
    >
      <LazyLoadImage
        effect="blur"
        src={avatar ? avatar : placeholderAvatar}
        alt=""
        className={`${
          avatar && "h-32 w-32 rounded-full object-cover object-center"
        }  h-32 w-32 rounded-full bg-transparent`}
      />
      <NavLink to={`/creators/${id}`}>
        <span className="cursor-pointer text-2xl font-bold underline underline-offset-4 transition-colors duration-200 hover:text-gray-400">
          {name}
        </span>
      </NavLink>
      <ul className="-mt-3 mb-6 flex items-center gap-1 font-semibold">
        {positions.map((position, index) => (
          <li key={position.id} className="text-xs">
            {position.name.charAt(0).toUpperCase() + position.name.slice(1)}
            {index < positions.length - 1 && ", "}
          </li>
        ))}
      </ul>

      <h2 className="flex w-full justify-between border-b-[1px] border-button-color pb-2">
        <span className="font-bold">Known for</span>
        <span className="text-sm text-info-color">
          {formattedNumber(gamesCount)}
        </span>
      </h2>
      <ul className="w-full space-y-1 ">
        {games.map((game) => (
          <li key={game.id} className="flex justify-between  text-sm ">
            <span className="cursor-pointer truncate underline decoration-gray-600 decoration-0 underline-offset-2 transition-colors duration-200 hover:text-info-color">
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
