import Header from "../ui/Header.jsx";
import { DesktopSideMenu } from "../ui/DesktopSideMenu.jsx";
import SideMenu from "../ui/SideMenu.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";
import { DesktopDetailedGameInfo } from "../ui/DesktopDetailedGameInfo.jsx";

export const DetailedGamePage = () => {
  return (
    <>
      <Header />
      <div className="px-5 tablet:flex tablet:px-10">
        <div className="desktopFirstHalf:block hidden h-fit">
          <DesktopSideMenu />
        </div>
        <section className="pb-36 ">
          <DesktopDetailedGameInfo />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
