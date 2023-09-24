import {
  faBars,
  faEllipsis,
  faSearch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setOpen } from "../slices/mobileMenuSlice.js";
import { Popover } from "antd";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu.jsx";

function Header() {
  const [query, setQuery] = useState("");
  const [onEnter, setOnEnter] = useState(false);
  const dispatch = useDispatch();

  function showDrawer() {
    dispatch(setOpen(true));
  }

  // Ref to the input element
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOnEnter(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const content = (
    <div>
      <p className="cursor-pointer">Leaderboard</p>
      <p className="cursor-pointer">Discord</p>
      <p className="cursor-pointer">Twitter</p>
      <p className="cursor-pointer">Instagram</p>
      <p className="cursor-pointer">Facebook</p>
    </div>
  );

  return (
    <nav className="tablet:mt-3 flex items-center justify-between px-4 py-4">
      <h1 className="text-xl font-black tracking-[0.2rem] text-white">
        PLAYZYX
      </h1>
      <div className="relative w-[55%] hover:text-black">
        <input
          type="text"
          className="tablet:py-2.5 w-full rounded-full border-none bg-second-color py-0.5 pl-8 pr-4 text-white transition-colors duration-200 placeholder:text-[15px] placeholder:text-gray-500 hover:bg-yellow-50 hover:text-black focus:border-none focus:bg-yellow-50 focus:text-black focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={() => setOnEnter(true)}
          placeholder="Search for games"
          ref={inputRef}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-0 top-1/2 ml-2.5 -translate-y-1/2 text-sm text-gray-500
          "
        />
        {query.length > 0 && (
          <span className="tablet:flex hidden">
            <FontAwesomeIcon
              icon={faX}
              className={`absolute right-0 top-1/2 mr-3 -translate-y-1/2 cursor-pointer text-xs ${
                query.length > 0 ? "text-black" : "text-white"
              } ${!onEnter && "text-white "} `}
              onClick={() => setQuery("")}
            />
          </span>
        )}
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="tablet:hidden text-2xl text-white"
        onClick={showDrawer}
      />
      <MobileMenu />
      <ul className=" tablet:flex hidden items-center gap-4 font-semibold text-white">
        <li>LOG IN</li>
        <li>SIGN UP</li>
        <li>API</li>
        <li className="flex items-center">
          <Popover content={content} minWidth="20" placement="bottomLeft">
            <FontAwesomeIcon icon={faEllipsis} className="mt-0.5 text-lg" />
          </Popover>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
