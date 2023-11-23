import { useOutletContext, useParams } from "react-router";
import useScreenShots from "../../hooks/generals/useScreenShots.js";
import { Spinner } from "../../ui/Loading/Spinner.jsx";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

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
    <div className="flex flex-col items-center ">
      <div className="mt-4 grid grid-cols-1 gap-2 smallTb:grid-cols-2">
        {screenShots?.map((shots, i) => (
          <img
            key={shots.id}
            src={shots.image}
            alt={`${i + 1}. Image of ${data?.name}`}
            className="cursor-pointer rounded-lg transition-all duration-200 hover:scale-105"
            onClick={() => setOpen(true)}
          />
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
