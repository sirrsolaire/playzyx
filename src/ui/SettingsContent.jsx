import { useGetUser } from "../hooks/authentication/useGetUser.js";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";

const list = [
  {
    id: 1,
    name: "Profile",
    slug: "user",
  },
  {
    id: 2,
    name: "My password",
    slug: "my-password",
  },
  {
    id: 3,
    name: "My email",
    slug: "my-email",
  },
];

const SettingsContent = () => {
  const { data: user } = useGetUser();
  const username = user?.user_metadata.username;

  return (
    <div className="mt-5 flex flex-col items-center gap-3 px-2 tablet:mt-14  tablet:px-0">
      <div className="flex flex-col items-center gap-8 tablet:w-full tablet:flex-row tablet:justify-between">
        <div className="flex flex-col items-center gap-4 tablet:flex-row-reverse tablet:gap-7">
          <h2 className="text-3xl font-bold text-white tablet:self-start tablet:text-7xl">
            Settings
          </h2>
        </div>
      </div>

      <ul className="mt-2 flex gap-5 tablet:mt-8 tablet:gap-10 tablet:self-start">
        {list.map((list) => (
          <NavLink
            key={list.id}
            to={`/profile/${username}/settings/${list.slug}`}
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold underline decoration-2 underline-offset-8"
                : "text-xl text-info-color hover:underline hover:decoration-2 hover:underline-offset-8"
            }
          >
            <li>{list.name}</li>
          </NavLink>
        ))}
      </ul>

      <div className="mt-10 w-full tablet:mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsContent;
