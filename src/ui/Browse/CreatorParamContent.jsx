import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../General/GameInfo.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../Loading/Spinner.jsx";
import { OrderFilter } from "../General/OrderFilter.jsx";
import { LayoutView } from "../General/LayoutView.jsx";
import { setLayout } from "../../reducers/layoutSlice.js";
import { useParams } from "react-router";
import useCreatorGames from "../../hooks/generals/useCreatorGames.js";
import { PlatformsFilter } from "../Platform/PlatformsFilter.jsx";
import NotFoundItem from "../General/NotFoundItem.jsx";
import { filteredPlatform } from "../../helpers/platformFilterLabel.js";

function CreatorParamContent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const layout = useSelector((state) => state.layout.layout);
  const firstSelectValue = useSelector((state) => state.filtering.firstSelect);
  const platform = useSelector((state) => state.filtering.platform);

  const {
    data: creatorGamesData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useCreatorGames({ firstSelectValue, id, platform });

  const dataLength =
    creatorGamesData?.pages.reduce(
      (total, page) => total + page.results.length,
      0,
    ) || 0;

  const hasGame = creatorGamesData?.pages[0].results;

  return (
    <>
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
          {creatorGamesData?.pages.map((page, i) => (
            <div
              key={i}
              className={` mb-4 gap-6 tablet:grid tablet:px-2 tablet:py-2 ${
                layout === "box"
                  ? "grid-cols-1"
                  : "grid-cols-2  tablet:h-fit desktopFirst:grid-cols-3 desktopSecond:grid-cols-4 desktopThird:grid-cols-5"
              }`}
            >
              {page?.results.map((game, i) => (
                <GameInfo
                  slug={game.slug}
                  key={i}
                  id={game.id}
                  name={game.name}
                  image={game.background_image}
                  meta={game.metacritic}
                  add={game.added}
                  platforms={game.platforms.map((game) => game.platform.name)}
                  releasedDate={game.released}
                  genres={game.genres.map((genre) => genre.name)}
                  rating={game.rating}
                />
              ))}
            </div>
          ))}
        </InfiniteScroll>
      </section>
    </>
  );
}

export default CreatorParamContent;
