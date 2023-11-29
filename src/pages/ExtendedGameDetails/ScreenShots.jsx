import { useOutletContext, useParams } from "react-router";
import useScreenShots from "../../hooks/generals/useScreenShots.js";
import { Spinner } from "../../ui/Loading/Spinner.jsx";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../../public/images/placeholder.png";

const ScreenShots = () => {
  const { slug } = useParams();
  const { data } = useOutletContext();
  const { data: screenShots, isLoading } = useScreenShots(slug);
  const [open, setOpen] = useState(false);

  const lightboxImages = screenShots?.map((shot) => ({
    src: shot.image,
    alt: `${shot.id}. Image of ${data?.name}`,
  }));

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 grid grid-cols-1 gap-3 smallTb:grid-cols-2">
        {screenShots?.map((shots, i) => (
          <div
            key={shots.id}
            className="durationAll cursor-pointer hover:scale-[1.03]"
          >
            <LazyLoadImage
              placeholderSrc={placeholder}
              effect="blur"
              src={shots.image}
              alt={`${i + 1}. Image of ${data?.name}`}
              className="h-[260px] w-[480px] rounded-lg object-cover object-center"
              onClick={() => setOpen(true)}
            />
          </div>
        ))}
        <Lightbox
          slides={lightboxImages}
          open={open}
          close={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default ScreenShots;
