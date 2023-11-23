import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../reducers/mobileMenuSlice.js";
import { useEffect, useRef, useState } from "react";
import { setQuery } from "../../reducers/querySlice.js";
import MobileMenu from "../Mobile/MobileMenu.jsx";
import { SearchResults } from "./SearchResults.jsx";
import { UserModal } from "./UserModal.jsx";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useLogOut } from "../../hooks/authentication/useLogOut.js";
import { NavLink } from "react-router-dom";
import UserDropDown from "./UserDropDrown.jsx";

function Header() {
  const [onEnter, setOnEnter] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false); // State to control search results visibility
  const query = useSelector((state) => state.query.query);
  const dispatch = useDispatch();
  const { logoutMutate } = useLogOut();
  const { data: user } = useGetUser();
  const authenticatedUser = user?.role === "authenticated";
  const userAvatar = user?.user_metadata?.avatar;
  const username = user?.user_metadata?.username;
  const getFirstLetter = username?.charAt(0).toUpperCase();

  const handleLogout = () => {
    logoutMutate();
  };

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

  return (
    <nav className="z-40 flex w-full items-center gap-4 px-7 py-4 tablet:px-10">
      <NavLink to="/">
        <h1 className="text-xl font-black tracking-[0.2rem] text-white">
          PLAYZYX
        </h1>
      </NavLink>

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
        className="cursor-pointer text-2xl text-white tablet:hidden"
        onClick={showDrawer}
      />
      <MobileMenu />

      <ul className=" hidden items-center gap-3 whitespace-nowrap font-semibold text-white tablet:flex">
        {!authenticatedUser ? (
          <>
            <NavLink to={"/login"}>
              <li
                className="cursor-pointer decoration-2 hover:underline hover:underline-offset-4"
                // onClick={handleLoginModal}
              >
                LOG IN
              </li>
            </NavLink>
            <NavLink to={"/register"}>
              <li
                className="cursor-pointer decoration-2 hover:underline hover:underline-offset-4"
                // onClick={handleRegisterModal}
              >
                SIGN UP
              </li>
            </NavLink>
          </>
        ) : (
          <div className="flex  items-center justify-between">
            <div className="flex items-center gap-3">
              {!userAvatar ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-default-profile-avatar">
                  <span className="text-2xl  font-bold ">{getFirstLetter}</span>
                </div>
              ) : (
                <img src={userAvatar} alt="" className="h-10 w-10" />
              )}
              <NavLink
                to={`/profile/${username}/overview`}
                className="cursor-pointer truncate text-lg decoration-2 hover:underline hover:underline-offset-4"
              >
                {username}
              </NavLink>
            </div>
            <UserDropDown handleLogout={handleLogout} username={username} />
          </div>
        )}
      </ul>
      <UserModal />
    </nav>
  );
}

export default Header;
