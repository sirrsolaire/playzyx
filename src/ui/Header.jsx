import {
  faBars,
  faEllipsis,
  faSearch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../slices/mobileMenuSlice.js";
import { Popover } from "antd";
import { useEffect, useRef, useState } from "react";
import { setQuery } from "../slices/querySlice.js";
import MobileMenu from "./MobileMenu.jsx";
import { SearchResults } from "./SearchResults.jsx";

function Header() {
  const [onEnter, setOnEnter] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false); // State to control search results visibility
  const query = useSelector((state) => state.query.query);
  const dispatch = useDispatch();

  function showDrawer() {
    dispatch(setOpen(true));
  }

  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOnEnter(false);
        setShowSearchResults(false);
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
    <nav className="flex items-center gap-4 px-7 py-4 tablet:mt-3 tablet:px-10">
      <h1 className="text-xl font-black tracking-[0.2rem] text-white">
        PLAYZYX
      </h1>

      <div className="relative w-full hover:text-black">
        <input
          type="text"
          className="w-full rounded-full border-none bg-second-color py-0.5 pl-8 pr-4 text-white transition-colors duration-200 placeholder:text-[15px] placeholder:text-gray-500 hover:bg-yellow-50 hover:text-black focus:border-none focus:bg-yellow-50 focus:text-black focus:outline-none tablet:py-2.5"
          value={query}
          onFocus={() => setShowSearchResults(true)}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          onClick={() => {
            setOnEnter(true);
            setShowSearchResults(true);
          }}
          placeholder="Search for games"
          ref={inputRef}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-0 top-1/2 ml-2.5 -translate-y-1/2 text-sm text-gray-500
          "
        />
        {query.length > 0 && (
          <span className="hidden tablet:flex">
            <FontAwesomeIcon
              icon={faX}
              className={`absolute right-0 top-1/2 mr-3 -translate-y-1/2 cursor-pointer text-xs ${
                query.length > 0 ? "text-black" : "text-white"
              } ${!onEnter && "text-white "} `}
              onClick={() => dispatch(setQuery(""))}
            />
          </span>
        )}
        {showSearchResults && <SearchResults />}
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-2xl text-white tablet:hidden"
        onClick={showDrawer}
      />
      <MobileMenu />
      <ul className=" hidden items-center gap-3 font-semibold text-white tablet:flex tablet:w-[290px] tablet:justify-end desktopFirst:w-[290px] desktopSecond:w-[255px]">
        <li className="cursor-pointer decoration-2 hover:underline hover:underline-offset-4">
          LOG IN
        </li>
        <li className="cursor-pointer decoration-2 hover:underline hover:underline-offset-4">
          SIGN UP
        </li>
        <li className="cursor-pointer decoration-2 hover:underline hover:underline-offset-4">
          API
        </li>
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
