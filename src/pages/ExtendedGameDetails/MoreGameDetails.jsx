import Header from "../../ui/Header.jsx";
import { DesktopSideMenu } from "../../ui/DesktopSideMenu.jsx";
import SideMenu from "../../ui/SideMenu.jsx";
import { FloatSideMenu } from "../../ui/FloatButton.jsx";
import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useDetailedGame from "../../hooks/useDetailedGame.js";

const navItems = [
  {
    name: "Screenshots",
    link: "screenshots",
  },
  {
    name: "Games-like",
    link: "games-like",
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
        <section className="grid w-full grid-cols-1 px-5 pb-36 tablet:mx-auto tablet:max-w-[960px]">
          <Outlet context={{ data }} />
          <ul className="mt-5 flex gap-3 overflow-y-auto">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "whitespace-nowrap font-semibold text-white"
                    : "whitespace-nowrap text-info-color "
                }
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
        <div className="h-[300px]">
          <div
            style={containerStyle}
            className="z-10 h-[300px] bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </>
  );
};

export default MoreGameDetails;
