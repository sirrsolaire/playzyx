import CommentReviewItem from "../../ui/Comment/CommentReviewItem.jsx";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import { useNavigate, useParams } from "react-router";
import WriteReviewButton from "../../ui/Buttons/WriteReviewButton.jsx";
import useDetailedGame from "../../hooks/generals/useDetailedGame.js";
import CommentDropDown from "../../ui/Comment/CommentDropDown.jsx";
import { useSelector } from "react-redux";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { userReviewedGame } from "../../helpers/checkIfReviewed.js";

const GameReviews = () => {
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);
  const { data: user } = useGetUser();
  const gameSlug = data?.slug;
  const userId = user?.id;
  const navigate = useNavigate();

  const { reviews, reviewsLoading } = useGetReviews();
  const filterByDate = useSelector((state) => state.filtering.filterByDate);
  const isChecked = useSelector((state) => state.auth.isReviewed);

  let checkReviewed = isChecked;

  if (!reviewsLoading) {
    checkReviewed = userReviewedGame(reviews, userId, gameSlug);
  }

  let filteredReviews = reviews;
  if (filteredReviews) {
    filteredReviews = filteredReviews.filter(
      (review) => review.game_slug === slug,
    );
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
    navigate(`/reviews/create-review/${data?.id}/${slug}`);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-2">
        <CommentDropDown />
      </div>
      <CommentReviewItem reviews={filteredReviews} loading={reviewsLoading} />
      {!checkReviewed ? (
        <WriteReviewButton handleNavigate={handleNavigate} />
      ) : null}
    </div>
  );
};

export default GameReviews;
