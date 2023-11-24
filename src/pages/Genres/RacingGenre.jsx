import Header from "../../ui/Header/Header.jsx";
import { DesktopSideMenu } from "../../ui/SideMenu/DesktopSideMenu.jsx";
import { Title } from "../../ui/General/Title.jsx";
import SideMenu from "../../ui/SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../../ui/Buttons/FloatButton.jsx";
import ActionGamesContent from "../../ui/Genre/ActionGamesContent.jsx";
import Tags from "../../ui/General/Tags.jsx";

export const RacingGenre = () => {
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title title="Racing Games" subTitle="" />
          <Tags />
          <ActionGamesContent genreId={1} />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};