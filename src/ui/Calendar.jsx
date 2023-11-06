import { useDispatch } from "react-redux";
import { setMonth } from "../reducers/calendarSlice.js";
import { NavLink } from "react-router-dom";

export const Calendar = () => {
  const dispatch = useDispatch();

  const months = [
    { name: "Jan", no: "01" },
    { name: "Feb", no: "02" },
    { name: "Mar", no: "03" },
    { name: "Apr", no: "04" },
    { name: "May", no: "05" },
    { name: "Jun", no: "06" },
    { name: "Jul", no: "07" },
    { name: "Aug", no: "08" },
    { name: "Sep", no: "09" },
    { name: "Oct", no: "10" },
    { name: "Nov", no: "11" },
    { name: "Dec", no: "12" },
  ];

  return (
    <ul className="m-auto flex w-[70%] flex-wrap items-center justify-center gap-2 text-xl tablet:m-0 tablet:w-full tablet:justify-start desktopFirst:text-2xl">
      {months.map((month) => (
        <NavLink
          key={month.no}
          to={`/release-calendar/${month.name}`}
          className={({ isActive }) =>
            isActive
              ? "font-semibold underline underline-offset-4 opacity-100"
              : "underline underline-offset-4 opacity-50"
          }
          onClick={() => dispatch(setMonth(month.no))}
        >
          <li key={month.no}>{month.name}</li>
        </NavLink>
      ))}
    </ul>
  );
};
