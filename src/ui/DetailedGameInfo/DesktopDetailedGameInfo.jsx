import { useParams } from "react-router";
import useDetailedGame from "../../hooks/generals/useDetailedGame.js";
import useScreenShots from "../../hooks/generals/useScreenShots.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSameSeries from "../../hooks/generals/useSameSeries.js";
import useAchievements from "../../hooks/generals/useAchievements.js";
import useRedditPosts from "../../hooks/generals/useRedditPosts.js";
import "../../assets/styles/antd.css";
import useEachGameShop from "../../hooks/generals/useEacHGameShop.js";
import { WhereToBuy } from "./WhereToBuy.jsx";
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

export const DesktopDetailedGameInfo = () => {
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);
  const { data: screenShotsData } = useScreenShots(slug);
  const { data: sameSeries } = useSameSeries(slug);
  const { data: achievementData } = useAchievements(slug);
  const { data: redditData } = useRedditPosts(slug);
  const { data: storeData } = useEachGameShop(slug);

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
          <WriteReviewComment data={data} />
          <ReadMoreToggle data={data} />
          <BottomGameInfos data={data} sameSeries={sameSeries} />
        </div>
        <div>
          <Gallery screenShotsData={screenShotsData} />
          <WhereToBuy storeData={storeData} />
          <RedditPosts data={data} redditData={redditData} />
        </div>
      </div>
      <Achievements data={data} achievementData={achievementData} />
      <BottomCommentSection data={data} screenShotsData={screenShotsData} />
      <TopBgImage data={data} />
    </>
  );
};
