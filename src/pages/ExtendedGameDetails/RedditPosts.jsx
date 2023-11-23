import { useOutletContext, useParams } from "react-router";
import useReview from "../../hooks/generals/useReview.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../../ui/Loading/Spinner.jsx";
import { useSelector } from "react-redux";
import { getTimeAgo } from "../../helpers/dateConvertor.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import NotFoundItem from "../../ui/General/NotFoundItem.jsx";

const RedditPosts = () => {
  const { data } = useOutletContext();
  const { slug } = useParams();

  const {
    data: postData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReview(slug);

  const dataLength =
    postData?.pages.reduce((total, page) => total + page.results.length, 0) ||
    0;

  if (!postData?.pages[0].results.length) {
    return <NotFoundItem gameName={data?.name} title="reddit post" />;
  }

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
        <div key={i} className="mb-2 flex flex-col gap-2">
          {page?.results.map((post, i) => (
            <RedditPostItem
              key={i}
              title={post.name}
              comment={post.text}
              image={post.image}
              username={post.username}
              usernameUrl={post.username_url}
              created={post.created}
              postUrl={post.url}
            />
          ))}
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default RedditPosts;

function RedditPostItem({
  title,
  usernameUrl,
  username,
  created,
  gameName,
  postUrl,
  image,
}) {
  const postLayout = useSelector((state) => state.layout.postLayout);
  const convertedDate = getTimeAgo(created);

  return (
    <div className="w-full rounded-xl bg-post-card px-5 py-3 shadow-md smallTb:flex smallTb:justify-between tablet:w-full">
      <div>
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

      {image ? (
        <img
          src={image}
          alt="Reddit post's image"
          className="ml-10 hidden h-[90px] w-[120px] rounded-lg object-cover object-center smallTb:block"
        />
      ) : null}
    </div>
  );
}
