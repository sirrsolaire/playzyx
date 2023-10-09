import useReview from "../hooks/useReview.js";
import { getTimeAgo } from "../helpers/dateConvertor.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Spinner } from "./Spinner.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

export const ReviewsContent = ({ gameId, gameName, gameImage }) => {
  const postLayout = useSelector((state) => state.layout.postLayout);
  const {
    data: postData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReview(gameId);

  const dataLength =
    postData?.pages.reduce((total, page) => total + page.results.length, 0) ||
    0;
  return (
    <InfiniteScroll
      style={{}}
      dataLength={dataLength}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={isFetchingNextPage && <Spinner />}
    >
      {isLoading && <Spinner />}
      {postData?.pages.map((page, i) => (
        <div
          key={i}
          className={`${
            postLayout === "grid"
              ? "smallTb:grid smallTb:grid-cols-2 desktopFirst:grid-cols-3 desktopSecond:grid-cols-4 desktopThird:grid-cols-5"
              : ""
          } flex flex-col items-start gap-3 px-4 py-2`}
        >
          {page?.results.map((post, i) => (
            <RedditPost
              key={i}
              title={post.name}
              comment={post.text}
              image={post.image}
              username={post.username}
              usernameUrl={post.username_url}
              created={post.created}
              gameImage={gameImage}
              gameName={gameName}
              postUrl={post.url}
            />
          ))}
        </div>
      ))}
    </InfiniteScroll>
  );
};

function RedditPost({
  title,
  usernameUrl,
  username,
  created,
  gameName,
  postUrl,
}) {
  const postLayout = useSelector((state) => state.layout.postLayout);
  const [showMore, setShowMore] = useState(false);
  const convertedDate = getTimeAgo(created);

  return (
    <div className="h-fit w-full rounded-xl bg-post-card px-5 py-3 shadow-md smallTb:flex smallTb:h-full smallTb:flex-col smallTb:justify-between tablet:w-full ">
      <div>
        <span className="text-lg font-semibold underline decoration-gray-9 underline-offset-[3px]">
          {gameName}
        </span>
        <a
          href={postUrl}
          className={`mt-2 block opacity-70 transition-colors duration-200 tablet:hover:text-gray-400 ${
            postLayout === "box" && "mb-1 text-lg font-semibold opacity-100"
          }`}
        >
          {title}
        </a>
        {postLayout === "box" && (
          <>
            <p className="  mb-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              finibus augue sed dapibus consectetur. Donec malesuada convallis
              velit id bibendum. Integer eu justo nibh. Nullam gravida dapibus
              mi, luctus sagittis ex blandit condimentum. Donec hendrerit nec
              nulla ac scelerisque. Nulla elit ex, porttitor sed felis sed,
              fermentum facilisis turpis. Integer condimentum placerat orci, eu
              molestie libero vulputate sit amet. Fusce pretium eget urna sit
              amet facilisis. Aenean aliquam nunc quam, varius suscipit est
              dictum id. Nullam eu ultricies quam. Nunc tempor eget dolor ac
              rutrum. Aliquam neque urna, euismod et facilisis eget, ullamcorper
              ac magna.
              {showMore &&
                ` Sed a faucibus velit. Curabitur quis tellus a tellus pretium eleifend
            vehicula maximus tellus. Cras eget risus eu dui aliquet tempor.
            Vivamus ut est turpis. Sed laoreet euismod velit, ut vestibulum nibh
            pretium malesuada. Etiam quis viverra ipsum, vitae dictum lacus.
            Nullam vitae urna placerat dolor dignissim ultrices at ut nisi.
            Etiam eget hendrerit leo. Mauris accumsan volutpat dapibus. Quisque
            tincidunt cursus metus, at porttitor lectus. Nam et condimentum
            nisi, ut suscipit nisi. Nullam ut sapien eget nibh pharetra
            lobortis. Maecenas scelerisque posuere ornare. Sed at lorem
            placerat, venenatis mauris ut, laoreet mauris. Donec dictum arcu at
            posuere lacinia. Donec luctus felis id vestibulum rutrum. Mauris
            nibh nulla, euismod quis enim a, pretium fermentum massa. Curabitur
            blandit sagittis placerat.`}
            </p>
            <span
              className="mt-2 cursor-pointer text-base font-semibold transition-all duration-200 hover:text-gray-400"
              onClick={() => setShowMore(!showMore)}
            >
              {!showMore ? "Read More..." : "Read Less..."}
            </span>
          </>
        )}
      </div>
      <div className="mt-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center self-end rounded-full bg-gray-8 shadow-md">
          <FontAwesomeIcon
            icon={faRedditAlien}
            className="text-2xl text-white"
          />
        </div>
        <div>
          <a
            href={usernameUrl}
            className="mt-2 block text-sm font-semibold transition-all duration-200 tablet:hover:text-stone-500"
          >
            {username}
          </a>
          <span className="text-sm opacity-50">{convertedDate}</span>
        </div>
      </div>
    </div>
  );
}
