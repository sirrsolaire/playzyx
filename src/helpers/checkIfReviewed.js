export const userReviewedGame = (reviews, userId, gameSlug) => {
  return reviews.some(
    (review) => review.account_id === userId && review.game_slug === gameSlug,
  );
};
