export const TopRatingInfos = ({ data }) => {
  return (
    <div className="mt-5 flex items-center justify-center tablet:justify-start">
      <div className="border-r-[1px] border-button-color pr-5  tracking-wider">
        <span className="text-lg font-bold tablet:text-2xl ">
          {data?.rating_top === 5 && "Exceptional"}
          {data?.rating_top === 4 && "Recommended"}
          {data?.rating_top === 3 && "Meh"}
          {data?.rating_top === 2 && "Skip"}
        </span>
        <div>
          <span className="text-xs underline underline-offset-[3px] opacity-50">
            {data?.reviews_count} RATINGS
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col border-r-[1px] border-button-color px-5 tracking-wider">
          <span className="text-2xl font-bold tablet:text-4xl">
            {data?.rating}
          </span>
          <span className="text-xs underline underline-offset-[3px] opacity-50">
            RARTING
          </span>
        </div>

        <div className="flex flex-col px-5 tracking-wider">
          <span className="text-2xl font-bold text-green-600 tablet:text-4xl">
            {data?.metacritic ? data?.metacritic : "SOON"}
          </span>
          <span className="text-[12px] underline underline-offset-[3px] opacity-50">
            METASCORE
          </span>
        </div>
      </div>
    </div>
  );
};
