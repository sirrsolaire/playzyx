import CommentDropDown from "../Comment/CommentDropDown.jsx";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import CommentReviewItem from "../Comment/CommentReviewItem.jsx";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useNavigate } from "react-router";
import WriteReviewButton from "../Buttons/WriteReviewButton.jsx";
import { useSelector } from "react-redux";

export const BottomCommentSection = ({
  data,
  screenShotsData,
  checkReviewed,
}) => {
  const { reviews } = useGetReviews();
  const { data: user, isLoading } = useGetUser();
  const filterByDate = useSelector((state) => state.filtering.filterByDate);
  const navigate = useNavigate();

  let filteredReviews = reviews;
  if (reviews) {
    if (reviews) {
      filteredReviews = reviews.filter(
        (review) => review.game_slug === data?.slug,
      );
    }
  }

  if (filterByDate === "1" || filterByDate === "0") {
    const sortOrder = filterByDate === "1" ? 1 : -1;

    filteredReviews?.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return sortOrder * (dateA - dateB);
    });
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
    <div className="relative mx-auto mt-10 max-w-[1000px]">
      <h2 className="text-center text-2xl">{data?.name} reviews</h2>
      <div className="mt-2 flex justify-center">
        <CommentDropDown />
      </div>

      {!checkReviewed ? (
        <WriteReviewButton handleNavigate={handleNavigate} />
      ) : null}

      <CommentReviewItem
        reviews={filteredReviews}
        user={user}
        checkReviewed={checkReviewed}
      />

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
