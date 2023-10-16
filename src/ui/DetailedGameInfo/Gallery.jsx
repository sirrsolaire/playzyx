import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const Gallery = ({ screenShotsData }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {screenShotsData?.slice(0, 5)?.map((game, index) => (
        <div
          key={game.id}
          className={`relative rounded-lg shadow-md ${
            index === 0 ? "first:col-span-2" : ""
          }`}
        >
          <img
            src={game.image}
            alt="Game's ss'"
            className={`h-full w-full cursor-pointer rounded-md object-cover ${
              index === 4 ? "opacity-10" : ""
            }`}
          />
          {index === 4 && (
            <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center opacity-60 transition-all duration-200 hover:opacity-100">
              <FontAwesomeIcon icon={faEllipsis} />
              <span className="text-sm">view more</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
