import { useGetReviews } from "../hooks/reviews/useGetReviews.js";
import { useGetUser } from "../hooks/authentication/useGetUser.js";
import ProfileReviewItem from "../ui/ProfileReviewItem.jsx";
import { Spinner } from "../ui/Spinner.jsx";

const ProfileReviews = () => {
  const { reviews, reviewsLoading } = useGetReviews();
  const { data: user } = useGetUser();

  let profileReviews = reviews;
  if (profileReviews) {
    profileReviews = profileReviews.filter(
      (review) => review.account_id === user.id,
    );
  }

  if (reviewsLoading) return <Spinner />;

  return (
    <>
      {profileReviews?.map((review) => (
        <ProfileReviewItem
          key={review.id}
          id={review.id}
          date={review.created_at}
          username={review.user_name}
          text={review.review}
          rate={review.rate}
          tags={review.tags}
          game={review.game_name}
        />
      ))}
    </>
  );
};

export default ProfileReviews;
