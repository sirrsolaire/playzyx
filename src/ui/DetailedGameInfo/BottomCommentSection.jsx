import CommentDropDown from "../Comment/CommentDropDown.jsx";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import CommentReviewItem from "../Comment/CommentReviewItem.jsx";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useNavigate } from "react-router";
import WriteReviewButton from "../Buttons/WriteReviewButton.jsx";

export const BottomCommentSection = ({ data, screenShotsData }) => {
  const { reviews, reviewsLoading } = useGetReviews();
  const { data: user, isLoading } = useGetUser();
  const navigate = useNavigate();

  let filteredReviews = reviews;
  if (reviews) {
    if (reviews) {
      filteredReviews = reviews.filter(
        (review) => review.game_slug === data?.slug,
      );
    }
  }

  const handleNavigate = () => {
    if (!isLoading && user) {
      navigate(`/reviews/create-review/${data?.id}/${data?.slug}`);
    } else {
      navigate("/login");
    }
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

      <WriteReviewButton handleNavigate={handleNavigate} />

      <CommentReviewItem reviews={filteredReviews} />

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
