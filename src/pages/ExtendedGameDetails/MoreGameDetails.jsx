import Header from "../../ui/Header/Header.jsx";
import { DesktopSideMenu } from "../../ui/SideMenu/DesktopSideMenu.jsx";
import SideMenu from "../../ui/SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../../ui/Buttons/FloatButton.jsx";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useDetailedGame from "../../hooks/generals/useDetailedGame.js";
import { TopNavigation } from "../../ui/DetailedGameInfo/TopNavigation.jsx";
import { Icon } from "@iconify/react";

const navItems = [
  {
    name: "Screenshots",
    link: "screenshots",
  },
  {
    name: "Reddit posts",
    link: "reddit-posts",
  },
  {
    name: "Reviews",
    link: "reviews",
  },
  {
    name: "Achievements",
    link: "achievements",
  },
];

const MoreGameDetails = () => {
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);
  const location = useLocation();
  const navigate = useNavigate();

  const lastSegment = location.pathname.split("/").pop();
  const isGamesLike = lastSegment === "games-like";

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${data?.background_image})`,
  };

  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <div className="hidden h-fit desktopFirstHalf:block">
          <DesktopSideMenu />
        </div>
        <section className=" w-full  px-5 pb-36 tablet:mx-auto tablet:max-w-[960px]">
          <div className="flex justify-center">
            <TopNavigation data={data} />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Icon
              icon="zondicons:arrow-left"
              className="cursor-pointer text-2xl"
              onClick={() => navigate(`/games/details/${slug}`)}
            />
            <h2 className="text-center text-2xl font-semibold">
              {!isGamesLike
                ? `${data?.name} ${lastSegment}`
                : `Games-like ${data?.name}`}
            </h2>
          </div>
          <div className="">
            <ul className="mb-4 mt-5 flex justify-center gap-3 overflow-y-auto smallTb:text-xl">
              {navItems.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "whitespace-nowrap font-semibold text-white"
                      : "whitespace-nowrap text-info-color"
                  }
                >
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
            <Outlet context={{ data }} />
          </div>
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
        <div className="h-[600px]">
          <div
            style={containerStyle}
            className="z-10 h-[600px] bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </>
  );
};

export default MoreGameDetails;
