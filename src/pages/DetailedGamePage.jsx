import Header from "../ui/Header/Header.jsx";
import { DesktopSideMenu } from "../ui/SideMenu/DesktopSideMenu.jsx";
import SideMenu from "../ui/SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../ui/Buttons/FloatButton.jsx";
import { DesktopDetailedGameInfo } from "../ui/DetailedGameInfo/DesktopDetailedGameInfo.jsx";

export const DetailedGamePage = () => {
  return (
    <>
      <Header />
      <div className="px-5 tablet:flex tablet:px-10">
        <div className="hidden h-fit desktopFirstHalf:block">
          <DesktopSideMenu />
        </div>
        <section className="pb-36 ">
          <DesktopDetailedGameInfo />
        </section>
        <SideMenu />
        <FloatSideMenu hidden="desktopFirstHalf:hidden" />
      </div>
    </>
  );
};
