import Star from "../assets/svg/Star";
import Fire from "../assets/svg/Fire";
import Next from "../assets/svg/Next";
import Calendar from "../assets/svg/Calendar";
import GamePad from "../assets/svg/GamePad.jsx";
import DownArrow from "../assets/svg/DownArrow.jsx";
import File from "../assets/svg/File.jsx";
import Comment from "../assets/svg/Comment.jsx";
import Ghost from "../assets/svg/Ghost.jsx";
import User from "../assets/svg/User.jsx";
import Tag from "../assets/svg/Tag.jsx";
import Code from "../assets/svg/Code.jsx";
import Doc from "../assets/svg/Doc.jsx";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Best from "../assets/svg/Best.jsx";
import Popular from "../assets/svg/Popular.jsx";
import Top from "../assets/svg/Top.jsx";
import Pc from "../assets/svg/Pc.jsx";
import Ps4 from "../assets/svg/Ps4.jsx";
import Xbox from "../assets/svg/Xbox.jsx";
import Nintendo from "../assets/svg/Nintendo.jsx";
import Ios from "../assets/svg/Ios.jsx";
import Android from "../assets/svg/Android.jsx";

function SideMenuContent() {
  const [hide, setHide] = useState(false);
  const [platformHide, setPlatformHide] = useState(false);
  const [genresHide, setGenresHide] = useState(false);
  return (
    <div className="pb-5">
      <div className="mb-4 mr-2 flex justify-between">
        <h1 className="text-lg font-bold">Home</h1>
        <h1 className=" mr-16 text-lg font-bold">Reviews</h1>
      </div>
      <div className="flex gap-14">
        <div className="flex flex-col">
          <div>
            <h1 className="mb-1 text-lg font-bold">New Releases</h1>
            <ul className="space-y-2">
              <li className="filterList">
                <span className="icon">
                  <Star />
                </span>
                <span>Last 30 days</span>
              </li>
              <li className="filterList">
                <span className="icon">
                  <Fire />
                </span>
                <span>This week</span>
              </li>
              <li className="filterList">
                <span className="icon">
                  <Next />
                </span>
                <span>Next week</span>
              </li>
              <li className="filterList">
                <span className="icon">
                  <Calendar />
                </span>
                <span>Release calendar</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 flex ">
            <div>
              <h1 className="mb-1 text-lg font-bold">All Games</h1>
              <h1 className="mb-1 mt-4 text-lg font-bold">Platforms</h1>
              <ul className="space-y-2">
                <li className="filterList">
                  <span className="icon">
                    <Pc />
                  </span>
                  <span>PC</span>
                </li>
                <li className="filterList">
                  <span className="icon">
                    <Ps4 />
                  </span>
                  <span>PlayStation 4</span>
                </li>
                <li className="filterList">
                  <span className="icon">
                    <Xbox />
                  </span>
                  <span>Xbox One</span>
                </li>
                {platformHide && (
                  <>
                    <li className="filterList">
                      <span className="icon">
                        <Nintendo />
                      </span>
                      <span>Nintendo Switch</span>
                    </li>
                    <li className="filterList">
                      <span className="icon">
                        <Ios />
                      </span>
                      <span>iOS</span>
                    </li>
                    <li className="filterList">
                      <span className="icon">
                        <Android />
                      </span>
                      <span>Android</span>
                    </li>
                  </>
                )}
                <span
                  className="flex cursor-pointer items-center gap-1  text-info-color"
                  onClick={() => setPlatformHide(!platformHide)}
                >
                  <span className="flex">
                    {platformHide ? (
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
                    {!platformHide ? "Show All" : "Hide"}
                  </span>
                </span>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="mb-1 mt-5 text-lg font-bold">Genres</h1>
            <ul className="space-y-2">
              <li className="filterList">
                <img src="/action.png" alt="" />
                <span>Action</span>
              </li>
              <li className="filterList">
                <img src="/strategy.png" alt="" />
                <span>Strategy</span>
              </li>
              <li className="filterList">
                <img src="/rpg.png" alt="" />
                <span>RPG</span>
              </li>
              {genresHide && (
                <>
                  <li className="filterList">
                    <img src="/shooter.png" alt="" />
                    <span>Shooter</span>
                  </li>
                  <li className="filterList">
                    <img src="/adventure.png" alt="" />
                    <span>Adventure</span>
                  </li>
                  <li className="filterList">
                    <img src="/puzzle.png" alt="" />
                    <span>Puzzle</span>
                  </li>
                  <li className="filterList">
                    <img src="/racing.png" alt="" />
                    <span>Racing</span>
                  </li>
                  <li className="filterList">
                    <img src="/sports.png" alt="" />
                    <span>Sports</span>
                  </li>
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
            <h1 className="mb-1 text-lg font-bold">Top</h1>
            <ul className="space-y-2">
              <li className="filterList">
                <span className="icon">
                  <Best />
                </span>
                <span>Best of the year</span>
              </li>
              <li className="filterList">
                <span className="icon">
                  <Popular />
                </span>
                <span>Popular in 2022</span>
              </li>
              <li className="filterList">
                <span className="icon">
                  <Top />
                </span>
                <span>All time top 250</span>
              </li>
            </ul>
          </div>
          <h1 className="mb-1 mt-5 text-lg font-bold">Browse</h1>
          <ul className="space-y-2">
            <li className="filterList">
              <span className="icon">
                <GamePad />
              </span>
              <span>Platforms</span>
            </li>
            <li className="filterList">
              <span className="icon">
                <DownArrow />
              </span>
              <span>Stores</span>
            </li>
            <li className="filterList">
              <span className="icon">
                <File />
              </span>
              <span>Collections</span>
            </li>
            <li className="filterList">
              <span className="icon">
                <Comment />
              </span>
              <span>Reviews</span>
            </li>
            {!hide && (
              <>
                <li className="filterList">
                  <span className="icon">
                    <Ghost />
                  </span>
                  <span>Genres</span>
                </li>
                <li className="filterList">
                  <span className="icon">
                    <User />
                  </span>
                  <span>Creators</span>
                </li>
                <li className="filterList">
                  <span className="icon">
                    <Tag />
                  </span>
                  <span>Tags</span>
                </li>
                <li className="filterList">
                  <span className="icon">
                    <Code />
                  </span>
                  <span>Developers</span>
                </li>
                <li className="filterList">
                  <span className="icon">
                    <Doc />
                  </span>
                  <span>Publishers</span>
                </li>
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
