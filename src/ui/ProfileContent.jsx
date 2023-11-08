import { useGetUser } from "../hooks/authentication/useGetUser.js";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import { Icon } from "@iconify/react";

const list = [
  {
    id: 1,
    name: "Overview",
    slug: "overview",
  },
  {
    id: 2,
    name: "Library",
    slug: "library",
  },
  {
    id: 3,
    name: "Wishlist",
    slug: "wishlist",
  },
  {
    id: 4,
    name: "Reviews",
    slug: "reviews",
  },
];

const ProfileContent = () => {
  const { data: user } = useGetUser();
  const userAvatar = user?.user_metadata.avatar;
  const username = user?.user_metadata.username;
  const bio = user?.user_metadata.bio;
  const getFirstLetter = username.charAt(0).toUpperCase();

  const truncatedUsername =
    username.length > 12 ? username.slice(0, 12) : username;

  return (
    <div className="mt-5 flex flex-col items-center gap-3 px-2 tablet:mt-14  tablet:px-0">
      <div className="mb-2 flex flex-col items-center gap-8 tablet:w-full tablet:flex-row tablet:justify-between">
        <div className="flex flex-col items-center gap-4 tablet:flex-row-reverse tablet:gap-7">
          {!userAvatar ? (
            <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full bg-default-profile-avatar">
              <span className="text-[43px]  font-bold ">{getFirstLetter}</span>
            </div>
          ) : (
            <img src={userAvatar} alt="" className="h-20 w-20" />
          )}
          <h2 className="text-3xl font-bold text-white tablet:self-start tablet:text-7xl">
            {truncatedUsername}
          </h2>
        </div>
        <div className="flex gap-2">
          <NavLink to={`/profile/${username}/settings/user`}>
            <button className="rounded-md bg-white px-5 py-3 text-black shadow-modal-button transition-all duration-200 hover:bg-opacity-80 tablet:flex-1 tablet:text-lg">
              Settings
            </button>
          </NavLink>
          <button className="rounded-md bg-white px-5 py-3 text-black shadow-modal-button transition-all duration-200 hover:bg-opacity-80 tablet:flex-1">
            <Icon
              icon="akar-icons:arrow-forward-thick-fill"
              className="text-2xl tablet:text-lg"
            />
          </button>
        </div>
      </div>

      {!bio ? (
        <NavLink
          to={`/profile/${username}/settings/user`}
          className="tablet:self-start"
        >
          <div
            className=" flex cursor-pointer items-center gap-2 rounded-lg bg-button-color px-5 py-3 transition-all duration-200 hover:bg-second-color
      "
          >
            <Icon
              icon="mingcute:add-fill"
              className="text-xl text-mobile-comment"
            />
            <span className="text-xl text-mobile-comment">Add Bio</span>
          </div>
        </NavLink>
      ) : (
        <p className="tablet:self-start">{bio}</p>
      )}

      <ul className="mt-4 flex gap-5 tablet:mt-8 tablet:gap-10 tablet:self-start">
        {list.map((list) => (
          <NavLink
            key={list.id}
            to={`/profile/${username}/${list.slug}`}
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

export default ProfileContent;
