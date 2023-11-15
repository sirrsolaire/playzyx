import Header from "../../ui/Header.jsx";
import { DesktopSideMenu } from "../../ui/DesktopSideMenu.jsx";
import SideMenu from "../../ui/SideMenu.jsx";
import { FloatSideMenu } from "../../ui/FloatButton.jsx";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <div className="hidden h-fit desktopFirstHalf:block">
          <DesktopSideMenu />
        </div>
        <section className="grid w-full grid-cols-1 px-5 pb-36 tablet:mx-auto tablet:max-w-[960px]">
          <Outlet />
          <ul>
            {navItems.map((item, i) => (
              <NavLink key={i} to={item.link}>
                <li>{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
    </>
  );
};

export default MoreGameDetails;
