import CommentReviewItem from "../../ui/CommentReviewItem.jsx";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import { useNavigate, useParams } from "react-router";
import WriteReviewButton from "../../ui/WriteReviewButton.jsx";
import useDetailedGame from "../../hooks/useDetailedGame.js";

const GameReviews = () => {
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);
  const navigate = useNavigate();
  const { reviews, reviewsLoading } = useGetReviews();

  let filteredReviews = reviews;
  if (filteredReviews) {
    filteredReviews = filteredReviews.filter(
      (review) => review.game_slug === slug,
    );
  }

  const handleNavigate = () => {
    navigate(`/reviews/create-review/${data?.id}/${slug}`);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <CommentReviewItem reviews={filteredReviews} loading={reviewsLoading} />
      <WriteReviewButton handleNavigate={handleNavigate} />
    </div>
  );
};

export default GameReviews;
