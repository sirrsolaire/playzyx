import Header from "../ui/Header.jsx";
import { ReviewsContent } from "../ui/ReviewsContent.jsx";
import useGame from "../hooks/useGame.js";
import { Title } from "../ui/Title.jsx";
import SideMenu from "../ui/SideMenu.jsx";
import { DesktopSideMenu } from "../ui/DesktopSideMenu.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";
import { LayoutView } from "../ui/LayoutView.jsx";
import { useDispatch } from "react-redux";
import { setPostLayout } from "../slices/layoutSlice.js";

export const Reviews = () => {
  const { data } = useGame();
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="tablet:flex  tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title title="Reviews" />
          <LayoutView
            onGrid={() => dispatch(setPostLayout("grid"))}
            onBox={() => dispatch(setPostLayout("box"))}
            addClass="smallTb:flex"
          />
          {data?.map((game, i) => (
            <ReviewsContent
              key={i}
              gameId={game.id}
              gameName={game.name}
              gameImage={game.background_image}
            />
          ))}
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
