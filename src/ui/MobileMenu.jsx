import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../reducers/mobileMenuSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useGetUser } from "../hooks/authentication/useGetUser.js";
import { Icon } from "@iconify/react";
import { useLogOut } from "../hooks/authentication/useLogOut.js";

const MobileMenu = () => {
  const { data: user } = useGetUser();
  const getUserAvatar = user?.user_metadata.avatar;
  const getUsername = user?.user_metadata.username;
  const getFirstLetter = getUsername?.charAt(0).toUpperCase();
  const navigate = useNavigate();
  const menuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();
  const { logoutMutate, logoutLoading } = useLogOut();

  const onClose = () => {
    dispatch(setOpen(false));
  };

  const handleLogOut = () => {
    logoutMutate();
    onClose();
  };

  return (
    <>
      <Drawer
        className="text-white"
        bodyStyle={{ backgroundColor: "#202020" }}
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={menuOpen}
        headerStyle={{ display: "none" }}
        width={100}
      >
        <FontAwesomeIcon
          icon={faX}
          className="durationAll absolute right-1/2 top-5 translate-x-1/2 cursor-pointer self-end text-3xl hover:text-pink-500"
          onClick={onClose}
        />
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center">
            {!user ? (
              <div
                className=" durationAll mt-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-second-color hover:text-pink-500"
                onClick={() => {
                  navigate("/login");
                  onClose();
                }}
              >
                <FontAwesomeIcon icon={faRightToBracket} className="text-3xl" />
              </div>
            ) : !getUserAvatar ? (
              <div
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-default-profile-avatar"
                onClick={() => {
                  navigate(`/profile/${getUsername}/overview`);
                  onClose();
                }}
              >
                <span className="text-4xl  font-bold ">{getFirstLetter}</span>
              </div>
            ) : (
              <img
                src={getUserAvatar}
                alt=""
                className="h-16 w-16 cursor-pointer"
                onClick={() => {
                  navigate(`/profile/${getUsername}/overview`);
                  onClose();
                }}
              />
            )}
            <span
              className={`mb-4 mt-1 text-center font-semibold ${
                user && "w-20 truncate"
              }`}
            >
              {!user ? "Log in" : getUsername}
            </span>
            <div
              className="durationAll mt-3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-second-color hover:text-pink-500"
              onClick={
                !user
                  ? () => {
                      navigate("/register");
                      onClose();
                    }
                  : handleLogOut
              }
            >
              <Icon
                icon={`${!user ? "fluent-mdl2:signin" : "line-md:log-out"}`}
                className="text-4xl"
              />
            </div>
            <span className="mt-1 font-semibold">
              {!user ? "Sign up" : "Log out"}
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default MobileMenu;
