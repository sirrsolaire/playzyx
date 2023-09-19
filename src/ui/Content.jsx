import Filter from "./Filter";
import { fetchGames } from "../util/api";
import GameInfo from "./GameInfo";
import { Oval } from "react-loader-spinner";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function Content() {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["games"],
      queryFn: fetchGames,
      getNextPageParam: (lastPage, pages) => lastPage.next,
    });
  console.log(data);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();

        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <main className="px-4">
      <h1 className="text-center text-4xl font-bold text-white">
        New and trending
      </h1>
      <p className="mt-1.5 text-center text-white">
        Based on player counts and release date
      </p>
      <div className="mb-6 flex justify-center gap-2">
        <Filter>
          <option value="relevance">Relevance</option>
          <option value="dateAdded">Date added</option>
          <option value="name">Name</option>
          <option value="releaseDate">Release date</option>
          <option value="averageRating">Average rating</option>
        </Filter>
        <Filter>
          <option value="all">All platforms</option>
          <option value="pc">PC</option>
          <option value="playStation">PlatStation</option>
          <option value="xbox">Xbox</option>
          <option value="iOS">iOS</option>
          <option value="android">Android</option>
          <option value="appleMacintosh">Apple Macintosh</option>
          <option value="linux">Linux</option>
          <option value="nintendo">Nintendo</option>
        </Filter>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}

      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.results?.map((game) => (
            <GameInfo
              key={game.id}
              name={game.name}
              image={game.background_image}
              meta={game.metacritic}
              add={game.added}
              platforms={game.platforms.map((game) => game.platform.name)}
            />
          ))}
        </div>
      ))}
      {isFetchingNextPage && (
        <div className="flex justify-center">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </main>
  );
}

export default Content;
