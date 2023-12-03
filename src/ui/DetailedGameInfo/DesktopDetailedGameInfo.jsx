import { useNavigate, useParams } from "react-router";
import useDetailedGame from "../../hooks/generals/useDetailedGame.js";
import useScreenShots from "../../hooks/generals/useScreenShots.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSameSeries from "../../hooks/generals/useSameSeries.js";
import useAchievements from "../../hooks/generals/useAchievements.js";
import useRedditPosts from "../../hooks/generals/useRedditPosts.js";
import "../../assets/styles/antd.css";
import useEachGameShop from "../../hooks/generals/useEacHGameShop.js";
import { WriteReviewComment } from "./WriteReviewComment.jsx";
import { RatingChart } from "./RatingChart.jsx";
import { TopRatingInfos } from "./TopRatingInfos.jsx";
import { AddToSection } from "./AddToSection.jsx";
import { TopGameTitle } from "./TopGameTitle.jsx";
import { TopDateAndPlatform } from "./TopDateAndPlatform.jsx";
import { TopNavigation } from "./TopNavigation.jsx";
import { ReadMoreToggle } from "./ReadMoreToggle.jsx";
import { BottomGameInfos } from "./BottomGameInfos.jsx";
import { Gallery } from "./Gallery.jsx";
import { RedditPosts } from "./RedditPosts.jsx";
import { Achievements } from "./Achievements.jsx";
import { BottomCommentSection } from "./BottomCommentSection.jsx";
import { TopBgImage } from "./TopBgImage.jsx";
import PageLoadSpinner from "../Loading/PageLoadSpinner.jsx";
import { WhereToBuy } from "./WhereToBuy.jsx";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useSelector } from "react-redux";
import { userReviewedGame } from "../../helpers/checkIfReviewed.js";

export const DesktopDetailedGameInfo = () => {
  const { slug } = useParams();
  const { data, isLoading } = useDetailedGame(slug);
  const { data: screenShotsData, isLoading: shotsLoading } =
    useScreenShots(slug);
  const { data: sameSeries, isLoading: sameLoading } = useSameSeries(slug);
  const { data: achievementData, isLoading: achieveLoading } =
    useAchievements(slug);
  const { data: redditData, isLoading: postLoading } = useRedditPosts(slug);
  const { data: storeData, isLoading: storeLoading } = useEachGameShop(slug);
  const { reviews, reviewsLoading } = useGetReviews();
  const { data: user, isLoading: userLoading } = useGetUser();
  const username = user?.user_metadata.username;
  const navigate = useNavigate();
  const userId = user?.id;
  const gameSlug = data?.slug;
  const isChecked = useSelector((state) => state.auth.isReviewed);

  let checkReviewed = isChecked;

  if (!reviewsLoading) {
    checkReviewed = userReviewedGame(reviews, userId, gameSlug);
  }

  const handleNavigate = () => {
    if (!userLoading && user && !checkReviewed) {
      navigate(`/reviews/create-review/${data?.id}/${data?.slug}`);
    } else if (!userLoading && user && checkReviewed) {
      navigate(`/profile/${username}/reviews`);
    } else {
      navigate("/login");
    }
  };

  if (
    isLoading ||
    shotsLoading ||
    sameLoading ||
    achieveLoading ||
    postLoading ||
    storeLoading
  )
    return (
      <div className="">
        <PageLoadSpinner />
      </div>
    );
  return (
    <>
      <TopNavigation data={data} />
      <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 ">
        <div className="">
          <TopDateAndPlatform data={data} />
          <TopGameTitle data={data} />
          <AddToSection data={data} />
          <TopRatingInfos data={data} />
          <RatingChart data={data} />
          <WriteReviewComment
            data={data}
            checkReviewed={checkReviewed}
            handleNavigate={handleNavigate}
          />
          <ReadMoreToggle data={data} />
          <BottomGameInfos data={data} sameSeries={sameSeries} />
        </div>
        <div>
          <Gallery screenShotsData={screenShotsData} />
          {storeData?.length ? <WhereToBuy storeData={storeData} /> : null}
          {redditData?.length ? (
            <RedditPosts data={data} redditData={redditData} />
          ) : null}
        </div>
      </div>
      <Achievements data={data} achievementData={achievementData} />
      <BottomCommentSection
        data={data}
        screenShotsData={screenShotsData}
        checkReviewed={checkReviewed}
      />
      <TopBgImage data={data} />
    </>
  );
};
