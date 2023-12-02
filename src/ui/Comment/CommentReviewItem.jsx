import { Icon } from "@iconify/react";
import { handleRateIcon } from "../../helpers/rateIcon.js";
import { useEffect, useState } from "react";
import { getTimeAgo } from "../../helpers/dateConvertor.js";
import { Spinner } from "../Loading/Spinner.jsx";
import { usePostReply } from "../../hooks/replies/usePostReply.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import SmallSpinner from "../Loading/SmallSpinner.jsx";
import { useQueryClient } from "@tanstack/react-query";
import { successNotify } from "../../helpers/toaster/toast.js";
import { useGetReplies } from "../../hooks/replies/useGetReplies.js";
import ReplyItem from "./ReplyItem.jsx";
import { NavLink } from "react-router-dom";

function CommentReviewItem({ reviews, loading }) {
  const { data: user } = useGetUser();
  const [replyInputs, setReplyInputs] = useState([]);
  const { postReplyLoading, postReplyMutate } = usePostReply();
  const { replyData } = useGetReplies();
  const username = user?.user_metadata.username;
  const avatar = user?.user_metadata.avatar;
  const queryClient = useQueryClient();

  useEffect(() => {
    if (reviews && reviews?.length > 0) {
      const initialInputs = reviews.map(() => ({
        query: "",
        showButton: false,
      }));
      setReplyInputs(initialInputs);
    }
  }, [reviews]);

  const handleInputChange = (index, value) => {
    const updatedInputs = [...replyInputs];
    updatedInputs[index].query = value;
    updatedInputs[index].showButton = value.length > 0;
    setReplyInputs(updatedInputs);
  };

  const handleReplySubmit = (e, i, id) => {
    e.preventDefault();
    postReplyMutate(
      {
        reply: replyInputs[i].query,
        username,
        avatar,
        id,
      },
      {
        onSuccess: () => {
          const initialInputs = reviews.map(() => ({
            query: "",
            showButton: false,
          }));
          setReplyInputs(initialInputs);
          queryClient.invalidateQueries(["replies"]);
          successNotify("You have replied!");
        },
      },
    );
  };

  if (loading) return <Spinner />;
  return (
    <>
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
            <div className="flex items-center gap-3  border-b-[1px] border-border-color px-5 pb-5">
              {!review.user_avatar ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-default-profile-avatar">
                  <span className="text-2xl  font-bold ">
                    {review.user_name.charAt(0).toUpperCase()}
                  </span>
                </div>
              ) : (
                <img
                  src={review.user_avatar}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover object-center"
                />
              )}
              <div className="flex flex-col">
                <span className="text-xs">{review.user_name}</span>
                <div className="space-x-1 text-xs text-info-color">
                  <span>{getTimeAgo(review.created_at)}</span>
                  {review.updated_at ? (
                    <>
                      <span>-</span>
                      <span>(Updated: {getTimeAgo(review.updated_at)})</span>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="space-y-2 px-1 py-5">
              {replyData
                ?.filter((reply) => reply.reply_uid === review.id)
                .map((item, i) => (
                  <ReplyItem
                    key={i}
                    username={item.username}
                    createdAt={item.created_at}
                    reply={item.reply}
                    avatar={item.avatar}
                  />
                ))}
            </div>
            <div className="border-t-[1px] border-border-color pt-4">
              {!user ? (
                <p className="ml-10">
                  <NavLink to="/login">
                    <span className="durationAll cursor-pointer text-blue-400 hover:underline">
                      Log in
                    </span>
                  </NavLink>{" "}
                  to reply
                </p>
              ) : (
                <form
                  className="w-full px-5"
                  onSubmit={(e) => handleReplySubmit(e, i, review.id)}
                >
                  <input
                    type="text"
                    className="mb-2 h-12 w-full rounded-md bg-game-info pl-5 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Write a reply ..."
                    onChange={(e) => handleInputChange(i, e.target.value)}
                    value={replyInputs[i] ? replyInputs[i].query : ""}
                    disabled={postReplyLoading}
                  />
                  {replyInputs[i]?.showButton && (
                    <button
                      className="h-12 w-full cursor-pointer bg-white font-bold text-black disabled:cursor-not-allowed"
                      disabled={postReplyLoading}
                    >
                      {postReplyLoading ? (
                        <SmallSpinner color="black" />
                      ) : (
                        <span>SEND</span>
                      )}
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentReviewItem;
