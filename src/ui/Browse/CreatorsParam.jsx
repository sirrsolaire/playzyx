import Header from "../Header/Header.jsx";
import { DesktopSideMenu } from "../SideMenu/DesktopSideMenu.jsx";
import { Title } from "../General/Title.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../Buttons/FloatButton.jsx";
import { useParams } from "react-router";
import useCreatorData from "../../hooks/generals/useCreatorData.js";
import sanitizeHtml from "sanitize-html";
import CreatorParamContent from "./CreatorParamContent.jsx";

export const CreatorsParam = () => {
  const { id } = useParams();
  const { data } = useCreatorData(id);
  const description = data?.description;
  const creatorName = data?.name;
  const creatorImage = data?.image;
  const creatorBg = data?.image_background;

  // for removing <p> tags
  const creatorDescription = sanitizeHtml(description, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"],
    },
  });

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${creatorBg})`,
  };

  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <div className="mt-2 flex flex-col-reverse items-center tablet:flex tablet:flex-row tablet:gap-4 ">
            <Title title={creatorName} />
            <img
              src={creatorImage}
              alt=""
              className="h-20 w-20 rounded-full object-cover object-center"
            />
          </div>
          <ul className="mb-3 flex justify-center gap-1.5 font-semibold tablet:justify-start">
            {data?.positions.map((position, index) => (
              <li key={position.slug} className="text-xl">
                {position.name.charAt(0).toUpperCase() + position.name.slice(1)}
                {index < data?.positions.length - 1 && ", "}
              </li>
            ))}
          </ul>
          <p className="px-4 text-center text-sm tablet:px-0 tablet:text-left">
            {creatorDescription}
          </p>
          <CreatorParamContent genreId={4} creatorBg={creatorBg} />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
        <div className="h-[500px]">
          <div
            style={containerStyle}
            className="z-10 h-[500px] bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </>
  );
};
