import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../../public/images/placeholder.jpg";
import { Link } from "react-router-dom";

export const Gallery = ({ screenShotsData }) => {
  const { slug } = useParams();

  return (
    <div className="mx-auto grid max-w-[700px] grid-cols-1 gap-2 smallTb:grid-cols-2">
      {screenShotsData?.slice(0, 5)?.map((game, index) => (
        <div
          key={game.id}
          className={`durationAll relative mx-auto cursor-pointer rounded-lg hover:scale-[1.03] ${
            index === 0 ? "smallTb:first:col-span-2" : ""
          }`}
        >
          <Link to={`/games/${slug}/more/screenshots`}>
            <LazyLoadImage
              placeholderSrc={placeholder}
              effect="blur"
              src={game.image}
              alt="Game's Screenshot"
              className={`rounded-md object-cover object-center ${
                index === 0
                  ? "h-[200px] w-[335px] smallTb:h-[340px] smallTb:w-[681px] tablet:h-[435px] tablet:w-[775px]"
                  : "h-[200px] w-[335px] tablet:h-[210px] tablet:w-[390px]"
              }`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
