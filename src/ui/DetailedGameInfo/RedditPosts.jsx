import { formatDate } from "../../helpers/dateFormat.js";
import { useNavigate, useParams } from "react-router";

export const RedditPosts = ({ data, redditData }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const slicedRedditData = redditData?.slice(0, 5);
  return (
    <div className="mt-10">
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-2 tablet:w-[390px] desktopFirst:w-[420px] desktopSecond:w-[480px]">
          <h2 className="cursor-pointer truncate text-2xl font-semibold underline underline-offset-4">
            {data?.name} posts
          </h2>
          <img
            src="/redditlogo.png"
            alt="Reddit logo with letter"
            className="h-5"
          />
        </div>
        <span className="hidden cursor-pointer text-xs text-info-color underline underline-offset-2 transition-all duration-200 hover:text-white">
          {data?.reddit_count} posts
        </span>
      </div>

      <ul>
        {slicedRedditData?.map((post) => (
          <a href={post.url} key={post.id}>
            <li className="flex  items-center justify-between  border-b-[1px] border-button-color py-4 ">
              <div>
                <h3 className="mb-1 font-semibold">
                  {post.name.slice(0, 60) + "..."}
                </h3>
                <div className="flex gap-2 text-xs font-bold text-info-color">
                  <span>{formatDate(post.created)}</span>
                  <span>{post.username.slice(3)}</span>
                </div>
              </div>
              {post.image ? (
                <img
                  src={post.image}
                  alt=""
                  className="ml-4 mr-2 min-h-[40px] min-w-[70px]"
                />
              ) : null}
            </li>
          </a>
        ))}
      </ul>
      {redditData?.length > 0 && (
        <button
          className="w-full rounded-md bg-button-color py-2 transition-all duration-200 hover:bg-white hover:text-black"
          onClick={() => navigate(`/games/${slug}/more/reddit-posts`)}
        >
          View All
        </button>
      )}
    </div>
  );
};
