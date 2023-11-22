import { Icon } from "@iconify/react";
import { handleRateIcon } from "../helpers/rateIcon.js";
import { formatDate } from "../helpers/dateFormat.js";
import { useState } from "react";
import { Spinner } from "./Spinner.jsx";

function CommentReviewItem({ reviews, loading }) {
  const [replyStates, setReplyStates] = useState({});

  const handleReplyChange = (e, commentId) => {
    const newValue = e.target.value;
    setReplyStates((prevState) => ({
      ...prevState,
      [commentId]: newValue,
    }));
  };

  if (loading) return <Spinner />;

  return (
    <div className="mt-2 w-full space-y-3">
      {reviews?.map((review, i) => (
        <div key={i} className="rounded-xl bg-[rgba(0,0,0,.3)] py-4">
          <div className="mb-2 flex items-center gap-3 px-5 text-xl font-semibold underline decoration-gray-9 underline-offset-2">
            <h3>
              {review.rate.charAt(0).toUpperCase() + review.rate.slice(1)}
            </h3>
            <span>
              <Icon icon={handleRateIcon(review.rate)} />
            </span>
          </div>
          <p className="mb-5 px-5 text-sm  opacity-70 ">
            {review.review.length > 500
              ? review.review.slice(0, 500) + "..."
              : review.review}
          </p>
          <ul className="mb-3 flex flex-wrap items-center gap-2 px-5 text-[11px] uppercase">
            {review.tags?.map((tag, i) => (
              <li
                key={i}
                className="w-fit rounded-full bg-[hsla(0,0%,100%,.05)] px-3 py-1 tracking-widest"
              >
                «{tag.name}»
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3  px-5 ">
            {!review.user_avatar ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-default-profile-avatar">
                <span className="text-2xl  font-bold ">
                  {review.user_name.charAt(0).toUpperCase()}
                </span>
              </div>
            ) : (
              <img src={review.user_avatar} alt="" className="h-10 w-10" />
            )}
            <div className="flex flex-col">
              <span className="text-xs">{review.user_name}</span>
              <span className="text-xs text-info-color">
                {formatDate(review.created_at)}
              </span>
            </div>
          </div>
          <div className=" mt-6 border-t-[1px] border-border-color pt-4">
            <form className="w-full px-5">
              <input
                type="text"
                className="mb-2 h-12 w-full rounded-md bg-game-info pl-5"
                placeholder="Write a reply ..."
                onChange={(e) => handleReplyChange(e, review.id)}
                value={replyStates[review.id]}
              />
              {replyStates[review.id]?.length > 0 && (
                <button className="h-12 w-full cursor-pointer bg-white font-bold text-black">
                  SEND
                </button>
              )}
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentReviewItem;
