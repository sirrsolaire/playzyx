import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../../public/images/placeholder.png";
import { Link } from "react-router-dom";

export const Gallery = ({ screenShotsData }) => {
  const { slug } = useParams();

  return (
    <div className="grid grid-cols-2 gap-2">
      {screenShotsData?.slice(0, 5)?.map((game, index) => (
        <div
          key={game.id}
          className={`durationAll relative cursor-pointer rounded-lg hover:scale-[1.03] ${
            index === 0 ? "first:col-span-2" : ""
          }`}
        >
          <Link to={`/games/${slug}/more/screenshots`}>
            <LazyLoadImage
              placeholderSrc={placeholder}
              effect="blur"
              src={game.image}
              alt="Game's Screenshot"
              className={`h-full w-full rounded-md object-cover `}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
