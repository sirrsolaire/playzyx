import Star from "../assets/svg/Star";
import Fire from "../assets/svg/Fire";
import Next from "../assets/svg/Next";
import Calendar from "../assets/svg/Calendar";
import GamePad from "../assets/svg/GamePad.jsx";
import DownArrow from "../assets/svg/DownArrow.jsx";
import Ghost from "../assets/svg/Ghost.jsx";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import User from "../assets/svg/User.jsx";
import Tag from "../assets/svg/Tag.jsx";
import Doc from "../assets/svg/Doc.jsx";
import Code from "../assets/svg/Code.jsx";
import { useDispatch } from "react-redux";
import { setBrowserType } from "../slices/browseSlice.js";

function SideMenuContent() {
  const [hide, setHide] = useState(false);
  const [genresHide, setGenresHide] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="pb-5">
      <div className="mb-4 mr-2 flex justify-between tablet:flex-col tablet:gap-5">
        <NavLink to="/">
          <h1
            className="cursor-pointer text-lg font-bold tablet:text-2xl tablet:transition-all
         tablet:duration-300 tablet:hover:opacity-50 "
          >
            Home
          </h1>
        </NavLink>
        {/*<NavLink to="/reviews">*/}
        {/*  <h1*/}
        {/*    className=" mr-16 cursor-pointer text-lg font-bold tablet:text-2xl tablet:transition-all*/}
        {/*    tablet:duration-300 tablet:hover:opacity-50"*/}
        {/*  >*/}
        {/*    Reviews*/}
        {/*  </h1>*/}
        {/*</NavLink>*/}
      </div>
      <div className="flex gap-14 tablet:flex-col tablet:gap-4">
        <div className="flex flex-col">
          <div>
            <h1
              className="mb-1 text-lg font-bold tablet:mb-4 tablet:text-2xl
            "
            >
              New Releases
            </h1>
            <ul className="flex flex-col gap-2">
              <NavLink
                to="/last-30-days"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <span className="icon">
                    <Star />
                  </span>
                  <span>Last 30 days</span>
                </li>
              </NavLink>
              <NavLink
                to="/this-week"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <span className="icon">
                    <Fire />
                  </span>
                  <span>This week</span>
                </li>
              </NavLink>
              <NavLink
                to="/next-week"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <span className="icon">
                    <Next />
                  </span>
                  <span>Next week</span>
                </li>
              </NavLink>
              <NavLink
                to="/release-calendar"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <span className="icon">
                    <Calendar />
                  </span>
                  <span>Release calendar</span>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="mt-5 flex ">
            <div>
              <NavLink to="/games">
                <h1
                  className="mb-1 cursor-pointer text-lg font-bold tablet:mb-4 tablet:text-2xl
         tablet:transition-all tablet:duration-300 tablet:hover:opacity-50 "
                >
                  All Games
                </h1>
              </NavLink>
              {/*<h1*/}
              {/*  className="mb-1 mt-4 text-lg font-bold tablet:mb-4 tablet:text-2xl*/}
              {/*"*/}
              {/*>*/}
              {/*  Platforms*/}
              {/*</h1>*/}
              {/*<ul className="space-y-2">*/}
              {/*  <li className="filterList">*/}
              {/*    <span className="icon">*/}
              {/*      <Pc />*/}
              {/*    </span>*/}
              {/*    <span>PC</span>*/}
              {/*  </li>*/}
              {/*  <li className="filterList">*/}
              {/*    <span className="icon">*/}
              {/*      <Ps4 />*/}
              {/*    </span>*/}
              {/*    <span>PlayStation 4</span>*/}
              {/*  </li>*/}
              {/*  <li className="filterList">*/}
              {/*    <span className="icon">*/}
              {/*      <Xbox />*/}
              {/*    </span>*/}
              {/*    <span>Xbox One</span>*/}
              {/*  </li>*/}
              {/*  {platformHide && (*/}
              {/*    <>*/}
              {/*      <li className="filterList">*/}
              {/*        <span className="icon">*/}
              {/*          <Nintendo />*/}
              {/*        </span>*/}
              {/*        <span>Nintendo Switch</span>*/}
              {/*      </li>*/}
              {/*      <li className="filterList">*/}
              {/*        <span className="icon">*/}
              {/*          <Ios />*/}
              {/*        </span>*/}
              {/*        <span>iOS</span>*/}
              {/*      </li>*/}
              {/*      <li className="filterList">*/}
              {/*        <span className="icon">*/}
              {/*          <Android />*/}
              {/*        </span>*/}
              {/*        <span>Android</span>*/}
              {/*      </li>*/}
              {/*    </>*/}
              {/*  )}*/}
              {/*  <span*/}
              {/*    className="flex cursor-pointer items-center gap-1  text-info-color"*/}
              {/*    onClick={() => setPlatformHide(!platformHide)}*/}
              {/*  >*/}
              {/*    <span className="flex">*/}
              {/*      {platformHide ? (*/}
              {/*        <FontAwesomeIcon*/}
              {/*          icon={faChevronUp}*/}
              {/*          className="text-base*/}
              {/*"*/}
              {/*        />*/}
              {/*      ) : (*/}
              {/*        <FontAwesomeIcon*/}
              {/*          icon={faChevronDown}*/}
              {/*          className="text-base*/}
              {/*    "*/}
              {/*        />*/}
              {/*      )}*/}
              {/*    </span>*/}
              {/*    <span className="text-sm">*/}
              {/*      {!platformHide ? "Show All" : "Hide"}*/}
              {/*    </span>*/}
              {/*  </span>*/}
              {/*</ul>*/}
            </div>
          </div>
          <div>
            <h1 className="mb-1  text-lg font-bold tablet:mb-4 tablet:text-2xl">
              Genres
            </h1>
            <ul className="flex flex-col gap-2">
              <NavLink
                to="/games/action"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <img src="/action.png" alt="" />
                  <span>Action</span>
                </li>
              </NavLink>
              <NavLink
                to="/games/strategy"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <img src="/strategy.png" alt="" />
                  <span>Strategy</span>
                </li>
              </NavLink>
              <NavLink
                to="/games/rpg"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-2"
                    : undefined
                }
              >
                <li className="filterList">
                  <img src="/rpg.png" alt="" />
                  <span>RPG</span>
                </li>
              </NavLink>
              {genresHide && (
                <>
                  <NavLink
                    to="/games/shooter"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-2"
                        : undefined
                    }
                  >
                    <li className="filterList">
                      <img src="/shooter.png" alt="" />
                      <span>Shooter</span>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/games/adventure"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-2"
                        : undefined
                    }
                  >
                    <li className="filterList">
                      <img src="/adventure.png" alt="" />
                      <span>Adventure</span>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/games/puzzle"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-2"
                        : undefined
                    }
                  >
                    <li className="filterList">
                      <img src="/puzzle.png" alt="" />
                      <span>Puzzle</span>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/games/racing"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-2"
                        : undefined
                    }
                  >
                    <li className="filterList">
                      <img src="/racing.png" alt="" />
                      <span>Racing</span>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/games/sports"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-2"
                        : undefined
                    }
                  >
                    <li className="filterList">
                      <img src="/sports.png" alt="" />
                      <span>Sports</span>
                    </li>
                  </NavLink>
                </>
              )}
            </ul>
            <span
              className="mt-2 flex cursor-pointer items-center  gap-1 text-info-color"
              onClick={() => setGenresHide(!genresHide)}
            >
              <span className="flex">
                {genresHide ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-base
              "
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-base
                  "
                  />
                )}
              </span>
              <span className="text-sm">
                {!genresHide ? "Show All" : "Hide"}
              </span>
            </span>
          </div>
        </div>

        <div>
          <div>
            {/*<h1 className="mb-1 text-lg font-bold tablet:mb-4 tablet:text-2xl">*/}
            {/*  Top*/}
            {/*</h1>*/}
            {/*<ul className="space-y-2">*/}
            {/*  <li className="filterList">*/}
            {/*    <span className="icon">*/}
            {/*      <Best />*/}
            {/*    </span>*/}
            {/*    <span>Best of the year</span>*/}
            {/*  </li>*/}
            {/*  <li className="filterList">*/}
            {/*    <span className="icon">*/}
            {/*      <Popular />*/}
            {/*    </span>*/}
            {/*    <span>Popular in 2022</span>*/}
            {/*  </li>*/}
            {/*  <li className="filterList">*/}
            {/*    <span className="icon">*/}
            {/*      <Top />*/}
            {/*    </span>*/}
            {/*    <span>All time top 250</span>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>
          <h1 className="mb-1  text-lg font-bold tablet:mb-4 tablet:text-2xl">
            Browse
          </h1>
          <ul className="flex flex-col gap-2">
            <NavLink
              to="/platforms"
              className={({ isActive }) =>
                isActive ? "font-bold underline underline-offset-2" : undefined
              }
              onClick={() => dispatch(setBrowserType("platforms"))}
            >
              <li className="filterList">
                <span className="icon">
                  <GamePad />
                </span>
                <span>Platforms</span>
              </li>
            </NavLink>
            <NavLink
              to="/stores"
              className={({ isActive }) =>
                isActive ? "font-bold underline underline-offset-2" : undefined
              }
              onClick={() => dispatch(setBrowserType("stores"))}
            >
              <li className="filterList">
                <span className="icon">
                  <DownArrow />
                </span>
                <span>Stores</span>
              </li>
            </NavLink>
            {/*<NavLink*/}
            {/*  to="/reviews"*/}
            {/*  className={({ isActive }) =>*/}
            {/*    isActive ? "font-bold underline underline-offset-2" : undefined*/}
            {/*  }*/}
            {/*  onClick={() => dispatch(setBrowserType("reviews"))}*/}
            {/*>*/}
            {/*  <li className="filterList">*/}
            {/*    <span className="icon">*/}
            {/*      <Comment />*/}
            {/*    </span>*/}
            {/*    <span>Reviews</span>*/}
            {/*  </li>*/}
            {/*</NavLink>*/}
            {!hide && (
              <>
                <NavLink
                  to="/genres"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : undefined
                  }
                  onClick={() => dispatch(setBrowserType("genres"))}
                >
                  <li className="filterList">
                    <span className="icon">
                      <Ghost />
                    </span>
                    <span>Genres</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/creators"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : undefined
                  }
                  onClick={() => dispatch(setBrowserType("creators"))}
                >
                  <li className="filterList">
                    <span className="icon">
                      <User />
                    </span>
                    <span>Creators</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/tags"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : undefined
                  }
                  onClick={() => dispatch(setBrowserType("tags"))}
                >
                  <li className="filterList">
                    <span className="icon">
                      <Tag />
                    </span>
                    <span>Tags</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/developers"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : undefined
                  }
                  onClick={() => dispatch(setBrowserType("developers"))}
                >
                  <li className="filterList">
                    <span className="icon">
                      <Code />
                    </span>
                    <span>Developers</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/publishers"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : undefined
                  }
                  onClick={() => dispatch(setBrowserType("publishers"))}
                >
                  <li className="filterList">
                    <span className="icon">
                      <Doc />
                    </span>
                    <span>Publishers</span>
                  </li>
                </NavLink>
              </>
            )}
            <span
              className="flex cursor-pointer items-center gap-1  text-info-color"
              onClick={() => setHide(!hide)}
            >
              <span className="flex">
                {!hide ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-base
              "
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-base
                  "
                  />
                )}
              </span>
              <span className="text-sm">{hide ? "Show All" : "Hide"}</span>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideMenuContent;
