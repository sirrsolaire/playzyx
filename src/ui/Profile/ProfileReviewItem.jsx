import ProfilePopover from "./ProfilePopover.jsx";
import { getTimeAgo } from "../../helpers/dateConvertor.js";
import { handleRateIcon } from "../../helpers/rateIcon.js";
import { Icon } from "@iconify/react";
import { useDeleteReview } from "../../hooks/reviews/useDeleteReview.js";
import { useQueryClient } from "@tanstack/react-query";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";

function ProfileReviewItem({ date, username, text, rate, tags, game, id }) {
  const { reviewDelete, reviewDeleteLoading } = useDeleteReview();
  const queryClient = useQueryClient();

  const handleDeleteReview = () => {
    reviewDelete(
      {
        id: id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["reviews"]);
          successNotify("You have deleted a review!");
        },
        onError: (err) => {
          generalError(err.message);
        },
      },
    );
  };

  return (
    <div className="flex flex-col rounded bg-border-color px-6 py-5">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-xl font-semibold underline underline-offset-4">
          <span>{game}</span>
          <span className="text-2xl">
            <Icon icon={handleRateIcon(rate)} />
          </span>
        </h2>
        <ProfilePopover
          option2="Delete"
          remove={handleDeleteReview}
          loading2={reviewDeleteLoading}
        />
      </div>
      <p className="mb-5 text-sm opacity-80">{text}</p>
      <ul className="mb-4 flex items-center gap-1 text-[11px] uppercase">
        {tags.map((tag, i) => (
          <li
            key={i}
            className="w-fit rounded-full bg-tag-color px-3 py-1 tracking-widest"
          >
            {tag.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <span className="text-xs">{username}</span>
        <span className="text-xs text-info-color">{getTimeAgo(date)}</span>
      </div>
    </div>
  );
}

export default ProfileReviewItem;
