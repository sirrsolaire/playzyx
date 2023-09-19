import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileMenu from "./MobileMenu.jsx";
import { useDispatch } from "react-redux";
import { setOpen } from "../slices/mobileMenuSlice.js";

function Header() {
  const dispatch = useDispatch();

  function showDrawer() {
    dispatch(setOpen(true));
  }

  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <h1 className="text-xl font-black tracking-[0.2rem] text-white">
        PLAYZYX
      </h1>
      <div className="relative w-[55%] hover:text-black">
        <input
          type="text"
          className="w-full  rounded-full border-none bg-second-color py-0.5 pl-8 pr-4 text-black transition-colors duration-200 placeholder:text-[15px] placeholder:text-gray-500 hover:bg-yellow-50 focus:border-none focus:bg-yellow-50 focus:outline-none"
          placeholder="Search for games"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-0 top-1/2 ml-2.5 -translate-y-1/2 text-sm text-gray-500 
          "
        />
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-2xl text-white"
        onClick={showDrawer}
      />
      <MobileMenu />
    </nav>
  );
}

export default Header;
