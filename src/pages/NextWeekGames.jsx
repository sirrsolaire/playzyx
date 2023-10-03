import Header from "../ui/Header.jsx";
import { DesktopSideMenu } from "../ui/DesktopSideMenu.jsx";
import { Title } from "../ui/Title.jsx";
import SideMenu from "../ui/SideMenu.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";
import NextWeekGamesContent from "../ui/NextWeekGamesContent.jsx";

export const NextWeekGames = () => {
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title title="Next week" />
          <NextWeekGamesContent />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
