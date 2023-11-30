import { useDispatch, useSelector } from "react-redux";
import { PlatformsFilter } from "../Platform/PlatformsFilter.jsx";
import { OrderFilter } from "../General/OrderFilter.jsx";
import { LayoutView } from "../General/LayoutView.jsx";
import { setLayout } from "../../reducers/layoutSlice.js";
import useLastThirty from "../../hooks/hooksByDate/useLastThirty.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../Loading/Spinner.jsx";
import GameInfo from "../General/GameInfo.jsx";
import { isNsfw } from "../../helpers/nsfwFilter.js";
import NotFoundItem from "../General/NotFoundItem.jsx";
import { filteredPlatform } from "../../helpers/platformFilterLabel.js";

function LastThirtyDaysContent() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.layout.layout);
  const firstSelectValue = useSelector((state) => state.filtering.firstSelect);
  const platform = useSelector((state) => state.filtering.platform);
  const {
    data: lastThirtyData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useLastThirty({ firstSelectValue, platform });

  const dataLength =
    lastThirtyData?.pages.reduce(
      (total, page) => total + page.results.length,
      0,
    ) || 0;

  const hasGame = lastThirtyData?.pages[0].results;

  return (
    <section className="flex-col px-4 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
      <div className="mb-6 mt-9 flex flex-wrap justify-center gap-2 tablet:mt-4 tablet:justify-between">
        <div className="flex gap-1 tablet:gap-2">
          <OrderFilter />
          <PlatformsFilter />
        </div>
        <LayoutView
          onGrid={() => dispatch(setLayout("grid"))}
          onBox={() => dispatch(setLayout("box"))}
          classNameGrid={`cursor-pointer rounded-md bg-second-color px-2 py-1 text-3xl text-white opacity-50 transition-all duration-200 hover:opacity-100 ${
            layout === "grid" && "smallTb:opacity-100"
          }`}
          classNameBox={`cursor-pointer rounded-md bg-second-color px-2 py-1 text-3xl text-white opacity-50 transition-all duration-200 hover:opacity-100 ${
            layout === "box" && "smallTb:opacity-100"
          }`}
        />
      </div>
      {!hasGame?.length && !isLoading && (
        <NotFoundItem title="Games" gameName={filteredPlatform(platform)} />
      )}
      <InfiniteScroll
        style={{}}
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={isFetchingNextPage && <Spinner />}
      >
        {isLoading && <Spinner />}
        {lastThirtyData?.pages.map((page, i) => (
          <div
            key={i}
            className={` mb-4 gap-6 tablet:grid tablet:px-2 tablet:py-2 ${
              layout === "box"
                ? "grid-cols-1"
                : "grid-cols-2  tablet:h-fit desktopFirst:grid-cols-3 desktopSecond:grid-cols-4 desktopThird:grid-cols-5"
            }`}
          >
            {page?.results
              .filter(
                (game) => !game.tags?.find((tag) => isNsfw.includes(tag.slug)),
              )
              .map((game, i) => (
                <GameInfo
                  slug={game.slug}
                  key={i}
                  id={game.id}
                  name={game.name}
                  image={game.background_image}
                  meta={game.metacritic}
                  add={game.added}
                  platforms={game.platforms.map(
                    (platform) => platform.platform.name,
                  )}
                  releasedDate={game.released}
                  genres={game.genres.map((genre) => genre.name)}
                  rating={game.rating}
                />
              ))}
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
}

export default LastThirtyDaysContent;
