import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../Spinner.jsx";
import useBrowse from "../../hooks/useBrowse.js";
import { BrowseContentItem } from "./BrowseContentItem.jsx";

function BrowseContent({ type }) {
  const {
    data: platformsData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useBrowse(type);

  const dataLength =
    platformsData?.pages.reduce(
      (total, page) => total + page.results.length,
      0,
    ) || 0;

  return (
    <section className="flex-col px-4 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
      <InfiniteScroll
        style={{}}
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={isFetchingNextPage && <Spinner />}
      >
        {isLoading && <Spinner />}
        {platformsData?.pages.map((page, i) => (
          <div
            key={i}
            className="mb-6 flex flex-col gap-6 smallTb:grid smallTb:grid-cols-2 smallTb:px-2 smallTb:py-2 tablet:grid-cols-3 desktopSecond:grid-cols-4 desktopThird:grid-cols-5"
          >
            {page?.results.map((platform, i) => (
              <BrowseContentItem
                id={platform.id}
                key={i}
                name={platform.name}
                slug={platform.slug}
                gamesCount={platform.games_count}
                image={platform.image_background}
                games={platform.games.slice(0, 3)}
              />
            ))}
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
}

export default BrowseContent;
