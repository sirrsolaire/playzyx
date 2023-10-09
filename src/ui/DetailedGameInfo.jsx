import { useParams } from "react-router";
import useDetailedGame from "../hooks/useDetailedGame.js";
import { formatDate } from "../helpers/dateFormat.js";

export const DetailedGameInfo = () => {
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${data?.background_image})`,
  };

  console.log(data?.parent_platforms.map((item) => item.platform.name));
  return (
    <>
      <div className="mt-4 flex justify-center gap-1 text-[10px] tracking-wider text-info-color">
        <span className="cursor-pointer">HOME</span>/
        <span className="cursor-pointer">GAMES</span>/
        <span className="cursor-pointer uppercase">{data?.name}</span>
      </div>
      <span className="flex w-fit rounded-md bg-white px-2 text-sm text-black">
        {formatDate(data?.released)}
      </span>
      <ul className="text-white">
        {data?.parent_platforms.map((platform, i) => (
          <span key={i}>{platform.platform.slug === "pc" && "💻"}</span>
        ))}
      </ul>
      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
        <div className="h-[300px]">
          <div
            style={containerStyle}
            className="z-10 h-[300px] bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </>
  );
};
