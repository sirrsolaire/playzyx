import { formatDate } from "../../helpers/dateFormat.js";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export const RedditPosts = ({ data, redditData }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const slicedRedditData = redditData?.slice(0, 5);

  return (
    <div className="mt-10">
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-2 tablet:w-[390px] desktopFirst:w-[420px] desktopSecond:w-[480px]">
          <Link
            to={data?.reddit_url}
            target="_blank"
            className="durationAll cursor-pointer truncate text-2xl font-semibold underline underline-offset-4 hover:opacity-60"
          >
            {data?.name} posts
          </Link>
          <img
            src="/images/redditlogo.png"
            alt="Reddit logo with letter"
            className="h-5"
          />
        </div>
        <span className="hidden cursor-pointer text-xs text-info-color underline underline-offset-2 transition-all duration-200 hover:text-white">
          {data?.reddit_count} posts
        </span>
      </div>
      <ul>
        {slicedRedditData?.map((post, i) => (
          <li
            key={i}
            className="flex  items-center justify-between border-b-[1px] border-button-color py-4 "
          >
            <div>
              <Link
                to={post?.url}
                target="_blank"
                className="mb-1 font-semibold hover:underline"
              >
                <p>{post.name.slice(0, 60) + "..."}</p>
              </Link>
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
