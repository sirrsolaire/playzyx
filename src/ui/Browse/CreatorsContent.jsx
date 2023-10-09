import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../Spinner.jsx";
import useCreators from "../../hooks/useCreators.js";
import { CreatorsContentItem } from "./CreatorsContentItem.jsx";

function CreatorsContent() {
  const {
    data: creatorsData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useCreators();

  const dataLength =
    creatorsData?.pages.reduce(
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
        {creatorsData?.pages.map((page, i) => (
          <div
            key={i}
            className="mb-6 flex flex-col gap-6 smallTb:grid smallTb:grid-cols-2 smallTb:px-2 smallTb:py-2 tablet:grid-cols-3 desktopSecond:grid-cols-4 desktopThird:grid-cols-5"
          >
            {page?.results.map((creator, i) => (
              <CreatorsContentItem
                key={i}
                name={creator.name}
                gamesCount={creator.games_count}
                image={creator.image_background}
                games={creator.games.slice(0, 3)}
                avatar={creator.image}
                positions={creator.positions}
                slug={creator.slug}
                id={creator.id}
              />
            ))}
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
}

export default CreatorsContent;
