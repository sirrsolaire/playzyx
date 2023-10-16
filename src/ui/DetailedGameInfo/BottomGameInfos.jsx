import { formatDate } from "../../helpers/dateFormat.js";

export const BottomGameInfos = ({ data, sameSeries }) => {
  return (
    <div className="mt-6">
      <div className="mb-4 grid grid-cols-2  ">
        <div className="flex flex-col gap-0.5">
          <span className="text-base opacity-50">Platforms</span>
          <ul className="flex flex-wrap items-center gap-1 text-base text-white">
            {data?.platforms.map((platform, i) => (
              <li
                key={i}
                className="underline decoration-gray-9 underline-offset-2"
              >
                {platform.platform.name}
                {i < data.platforms.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-13 flex flex-col gap-0.5 ">
          <span className="text-base opacity-50">Metascore</span>
          <span className="w-fit rounded border-[1px] border-green-500 px-1 font-semibold text-green-500">
            {data?.metacritic ? data?.metacritic : "Soon"}
          </span>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-base opacity-50">Genres</span>
          <ul className="flex flex-wrap items-center gap-1 text-base text-white">
            {data?.genres.map((genre, i) => (
              <li
                key={i}
                className="underline decoration-gray-9 underline-offset-2"
              >
                {genre.name}
                {i < data.platforms.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-13 flex flex-col gap-0.5">
          <span className="text-base opacity-50">Release Date</span>
          <span className="w-fit text-base text-white">
            {formatDate(data?.released)}
          </span>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-base opacity-50">Developer</span>
          <ul className="flex items-center gap-1 text-base text-white">
            {data?.developers.map((developer, i) => (
              <li
                key={i}
                className="underline decoration-gray-9 underline-offset-2"
              >
                {developer.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-13 flex flex-col gap-0.5">
          <span className="text-base opacity-50">Publisher</span>
          <ul className="flex flex-wrap gap-1">
            {data?.publishers.map((game, i) => (
              <span
                key={i}
                className=" w-fit  text-base text-white underline decoration-gray-9 underline-offset-2"
              >
                {game.name}
                {i < data?.publishers.length - 1 ? "," : ""}
              </span>
            ))}
          </ul>
        </div>
      </div>

      {data?.esrb_rating && (
        <div className="mb-4 flex items-center justify-between ">
          <div className="flex flex-col gap-0.5">
            <span className="text-base opacity-50">Age rating</span>
            <ul className="flex items-center gap-1 text-base text-white">
              <li className="underline decoration-gray-9 underline-offset-2">
                {data?.esrb_rating ? data.esrb_rating.name : null}
              </li>
            </ul>
          </div>
        </div>
      )}

      {sameSeries?.length > 0 && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-base opacity-50">
              Other games in the series
            </span>
            <ul className="flex flex-wrap items-center gap-1 text-base text-white">
              {sameSeries?.map((game, i) => (
                <li
                  key={i}
                  className="underline decoration-gray-9 underline-offset-2"
                >
                  {game.name}
                  {i < sameSeries?.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-base opacity-50">Tags</span>
          <ul className="flex flex-wrap items-center gap-1 text-base text-white">
            {data?.tags.map((tag, i) => (
              <li
                key={i}
                className="underline decoration-gray-9 underline-offset-2"
              >
                {tag.name}
                {i < data?.tags.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {data?.website && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-base opacity-50">Website</span>
            <ul className="flex flex-wrap items-center gap-1 text-base text-white">
              <li className="underline decoration-gray-9 underline-offset-2">
                {data?.website}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
