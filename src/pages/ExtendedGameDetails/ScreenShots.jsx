import { useOutletContext, useParams } from "react-router";
import useScreenShots from "../../hooks/useScreenShots.js";

const ScreenShots = () => {
  const { slug } = useParams();
  const { data } = useOutletContext();
  const { data: screenShots, isLoading } = useScreenShots(slug);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 grid grid-cols-2 gap-2">
        {screenShots?.map((shots, i) => (
          <img
            key={shots.id}
            src={shots.image}
            alt={`${i + 1}. Image of ${data?.name}`}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenShots;
