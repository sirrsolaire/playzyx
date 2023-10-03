import Header from "../ui/Header.jsx";
import { DesktopSideMenu } from "../ui/DesktopSideMenu.jsx";
import { Title } from "../ui/Title.jsx";
import SideMenu from "../ui/SideMenu.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";
import GamesByMonth from "../ui/GamesByMonth.jsx";
import { currentYear } from "../helpers/dateConvertor.js";
import { useSelector } from "react-redux";
import { fullMonths } from "../helpers/monthStringConvertor.js";
import { Calendar } from "../ui/Calendar.jsx";

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
