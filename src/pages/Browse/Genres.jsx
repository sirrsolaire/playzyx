import Header from "../../ui/Header/Header.jsx";
import { DesktopSideMenu } from "../../ui/SideMenu/DesktopSideMenu.jsx";
import { Title } from "../../ui/General/Title.jsx";
import BrowseContent from "../../ui/Browse/BrowseContent.jsx";
import SideMenu from "../../ui/SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../../ui/Buttons/FloatButton.jsx";

export const Genres = () => {
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title title="Genres" subTitle="" />
          <BrowseContent />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
