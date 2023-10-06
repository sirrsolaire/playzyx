import Header from "../../ui/Header.jsx";
import { DesktopSideMenu } from "../../ui/DesktopSideMenu.jsx";
import { Title } from "../../ui/Title.jsx";
import SideMenu from "../../ui/SideMenu.jsx";
import { FloatSideMenu } from "../../ui/FloatButton.jsx";
import BrowseContent from "../../ui/Browse/BrowseContent.jsx";

export const Developers = () => {
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title title="Developers" subTitle="" />
          <BrowseContent />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
