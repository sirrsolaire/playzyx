import CommentDropDown from "../CommentDropDown.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../helpers/dateFormat.js";
import { useState } from "react";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import { Icon } from "@iconify/react";

export const BottomCommentSection = ({ data, screenShotsData }) => {
  const [replyStates, setReplyStates] = useState({});
  const { reviews, reviewsLoading } = useGetReviews();

  let filteredReviews = reviews;
  if (reviews) {
    if (reviews) {
      filteredReviews = reviews.filter(
        (review) => review.game_slug === data?.slug,
      );
    }
  }

  const handleRateIcon = (rate) => {
    const setIcon = {
      exceptional: <Icon icon="game-icons:supersonic-arrow" />,
      recommended: <Icon icon="icon-park-outline:good-two" />,
      meh: <Icon icon="vaadin:meh-o" />,
      skip: <Icon icon="icon-park-outline:bad-two" />,
    };

    return setIcon[rate] || null;
  };

  const handleReplyChange = (e, commentId) => {
    const newValue = e.target.value;
    setReplyStates((prevState) => ({
      ...prevState,
      [commentId]: newValue,
    }));
  };
  const commentImage = screenShotsData?.map((item) => item.image);
  const commentContainer = {
    backgroundImage: ` radial-gradient(closest-side, transparent, rgb(21, 21, 21)), url(${commentImage?.at(
      0,
    )})`,
  };
  return (
    <div className="relative mx-auto mt-10 max-w-2xl">
      <h2 className="text-center text-2xl">
        {data?.name} reviews and comments
      </h2>
      <div className="mt-3 flex justify-center gap-2 ">
        <span className="tab">Reviews</span>
      </div>
      <div className="mt-2 flex justify-center">
        <CommentDropDown />
      </div>

      <div className="mt-4 cursor-pointer rounded-xl bg-[rgba(0,0,0,.5)] transition-all duration-200 hover:bg-white hover:text-black">
        <div className="flex flex-col items-center justify-center gap-2 py-4 text-xl">
          <FontAwesomeIcon icon={faPlus} />
          <span>Write a review</span>
        </div>
      </div>

      <div className="mt-2 space-y-3">
        {filteredReviews?.map((review, i) => (
          <div key={i} className="rounded-xl bg-[rgba(0,0,0,.3)] py-4">
            <div className="mb-2 flex items-center gap-3 px-5 text-xl font-semibold underline decoration-gray-9 underline-offset-2">
              <h3>
                {review.rate.charAt(0).toUpperCase() + review.rate.slice(1)}
              </h3>
              <span>{handleRateIcon(review.rate)}</span>
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
              <img
                src={review.user_avatar}
                alt={`${review.user_name}'s image`}
                className="h-[40px] w-[40px] rounded-full"
              />
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

      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%] blur-sm">
        <div className="h-[300px]">
          <div
            style={commentContainer}
            className="z-10 h-[300px] bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </div>
  );
};
