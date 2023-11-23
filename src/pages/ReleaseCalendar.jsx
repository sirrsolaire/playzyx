import Header from "../ui/Header/Header.jsx";
import { DesktopSideMenu } from "../ui/SideMenu/DesktopSideMenu.jsx";
import { Title } from "../ui/General/Title.jsx";
import SideMenu from "../ui/SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../ui/Buttons/FloatButton.jsx";
import GamesByMonth from "../ui/Date/GamesByMonth.jsx";
import { currentYear } from "../helpers/dateConvertor.js";
import { useSelector } from "react-redux";
import { fullMonths } from "../helpers/monthStringConvertor.js";
import { Calendar } from "../ui/Date/Calendar.jsx";

export const ReleaseCalendar = () => {
  const getMonth = useSelector((state) => state.month.monthNo);

  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <DesktopSideMenu />
        <section className="flex-col px-0 tablet:mt-6 tablet:flex tablet:w-full tablet:px-0">
          <Title
            title={`Release calendar - ${fullMonths(getMonth)} ${currentYear}`}
          />
          <Calendar />
          <GamesByMonth />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};
