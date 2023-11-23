import Header from "../../ui/Header/Header.jsx";
import { ReviewsContent } from "../../ui/Comment/ReviewsContent.jsx";
import useGame from "../../hooks/generals/useGame.js";
import { Title } from "../../ui/General/Title.jsx";
import SideMenu from "../../ui/SideMenu/SideMenu.jsx";
import { DesktopSideMenu } from "../../ui/SideMenu/DesktopSideMenu.jsx";
import { FloatSideMenu } from "../../ui/Buttons/FloatButton.jsx";
import { LayoutView } from "../../ui/General/LayoutView.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPostLayout } from "../../reducers/layoutSlice.js";

export const Reviews = () => {
  const postLayout = useSelector((state) => state.layout.postLayout);
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
            classNameGrid={`cursor-pointer rounded-md bg-second-color px-2 py-1 text-3xl text-white opacity-50 transition-all duration-200 hover:opacity-100 ${
              postLayout === "grid" && "smallTb:opacity-100"
            }`}
            classNameBox={`cursor-pointer rounded-md bg-second-color px-2 py-1 text-3xl text-white opacity-50 transition-all duration-200 hover:opacity-100 ${
              postLayout === "box" && "smallTb:opacity-100"
            }`}
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
