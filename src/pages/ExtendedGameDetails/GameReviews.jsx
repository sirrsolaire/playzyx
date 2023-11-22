import CommentReviewItem from "../../ui/CommentReviewItem.jsx";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import { useParams } from "react-router";

const GameReviews = () => {
  const { slug } = useParams();
  const { reviews, reviewsLoading } = useGetReviews();

  let filteredReviews = reviews;
  if (filteredReviews) {
    filteredReviews = filteredReviews.filter(
      (review) => review.game_slug === slug,
    );
  }

  return (
    <div className="flex w-full flex-col items-center">
      <CommentReviewItem reviews={filteredReviews} loading={reviewsLoading} />
    </div>
  );
};

export default GameReviews;
