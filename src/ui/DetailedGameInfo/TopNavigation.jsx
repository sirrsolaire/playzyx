import { NavLink } from "react-router-dom";

export const TopNavigation = ({ data }) => {
  return (
    <div className="mb-8 mt-4 flex justify-center gap-1 text-xs tracking-wider text-info-color tablet:justify-start tablet:text-[12px]">
      <NavLink to="/">
        <span className="cursor-pointer transition-all duration-200 hover:opacity-70">
          HOME /
        </span>
      </NavLink>
      <NavLink to="/games">
        <span className="cursor-pointer transition-all duration-200 hover:opacity-70">
          GAMES /
        </span>
      </NavLink>
      <span className="cursor-pointer uppercase">{data?.name}</span>
    </div>
  );
};
