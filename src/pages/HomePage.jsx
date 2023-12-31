import Header from "../ui/Header/Header.jsx";
import { DesktopSideMenu } from "../ui/SideMenu/DesktopSideMenu.jsx";
import SideMenu from "../ui/SideMenu/SideMenu.jsx";
import Content from "../ui/General/Content.jsx";
import { Title } from "../ui/General/Title.jsx";
import { FloatSideMenu } from "../ui/Buttons/FloatButton.jsx";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title
            title="New and trending"
            subTitle="Based on player counts and release date"
          />
          <Content />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
