import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router";

export const WriteReviewComment = ({ handleNavigate, checkReviewed }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-4 max-w-[500px] gap-2 space-y-1 tablet:mx-0 tablet:flex tablet:space-y-0">
      <div
        onClick={handleNavigate}
        className={`
          group flex cursor-pointer items-center justify-center gap-2 rounded-md bg-button-color px-4 py-3 text-center transition-all duration-200 hover:bg-white hover:text-black ${
            checkReviewed ? "bg-white hover:bg-opacity-60" : "bg-button-color "
          }
        `}
      >
        <Icon
          icon={`${checkReviewed ? "bi:check-circle-fill" : "ic:round-plus"}`}
          className={`text-xl  group-hover:opacity-100 ${
            checkReviewed ? "text-black opacity-100" : "opacity-50"
          }`}
        />
        <span
          className={`tracking-wide ${
            checkReviewed ? "text-black" : "opacity-50 group-hover:opacity-100"
          }`}
        >
          {checkReviewed ? "You have reviewed" : "Write a review"}
        </span>
      </div>
      <div
        className="group flex cursor-pointer items-center justify-center gap-2 rounded-md bg-button-color px-4 py-3 text-center transition-all duration-200 hover:bg-white hover:text-black"
        onClick={() => navigate(`/games/${slug}/more/reviews`)}
      >
        <Icon
          icon="iconamoon:comment"
          className="text-xl opacity-50 group-hover:opacity-100"
        />
        <span className="tracking-wide opacity-50 group-hover:opacity-100">
          See all reviews
        </span>
      </div>
    </div>
  );
};
