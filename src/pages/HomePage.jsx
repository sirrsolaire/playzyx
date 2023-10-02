import Header from "../ui/Header.jsx";
import { DesktopSideMenu } from "../ui/DesktopSideMenu.jsx";
import SideMenu from "../ui/SideMenu.jsx";
import Content from "../ui/Content.jsx";
import { Title } from "../ui/Title.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";

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
