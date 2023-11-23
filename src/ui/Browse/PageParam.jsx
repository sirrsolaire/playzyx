import Header from "../Header/Header.jsx";
import { DesktopSideMenu } from "../SideMenu/DesktopSideMenu.jsx";
import { Title } from "../General/Title.jsx";
import Tags from "../General/Tags.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../Buttons/FloatButton.jsx";
import PageParamsContent from "./PageParamsContent.jsx";
import { useParams } from "react-router";
import { formattedSlug } from "../../helpers/platformFilterLetterConvertor.js";

export const PageParam = () => {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title title={`${formattedSlug(slug)}`} subTitle="" />
          <Tags />
          <PageParamsContent genreId={4} />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
