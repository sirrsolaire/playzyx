import { useParams } from "react-router";
import useDetailedGame from "../hooks/useDetailedGame.js";
import useScreenShots from "../hooks/useScreenShots.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSameSeries from "../hooks/useSameSeries.js";
import useAchievements from "../hooks/useAchievements.js";
import useRedditPosts from "../hooks/useRedditPosts.js";
import "../assets/styles/antd.css";
import useEachGameShop from "../hooks/useEacHGameShop.js";
import { WhereToBuy } from "./DetailedGameInfo/WhereToBuy.jsx";
import { WriteReviewComment } from "./DetailedGameInfo/WriteReviewComment.jsx";
import { RatingChart } from "./DetailedGameInfo/RatingChart.jsx";
import { TopRatingInfos } from "./DetailedGameInfo/TopRatingInfos.jsx";
import { AddToSection } from "./DetailedGameInfo/AddToSection.jsx";
import { TopGameTitle } from "./DetailedGameInfo/TopGameTitle.jsx";
import { TopDateAndPlatform } from "./DetailedGameInfo/TopDateAndPlatform.jsx";
import { TopNavigation } from "./DetailedGameInfo/TopNavigation.jsx";
import { ReadMoreToggle } from "./DetailedGameInfo/ReadMoreToggle.jsx";
import { BottomGameInfos } from "./DetailedGameInfo/BottomGameInfos.jsx";
import { Gallery } from "./DetailedGameInfo/Gallery.jsx";
import { RedditPosts } from "./DetailedGameInfo/RedditPosts.jsx";
import { Achievements } from "./DetailedGameInfo/Achievements.jsx";
import { BottomCommentSection } from "./DetailedGameInfo/BottomCommentSection.jsx";
import { TopBgImage } from "./DetailedGameInfo/TopBgImage.jsx";

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
