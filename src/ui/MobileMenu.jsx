import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../slices/mobileMenuSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const MobileMenu = () => {
  const menuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <>
      <Drawer
        className=" text-white"
        bodyStyle={{ backgroundColor: "#202020" }}
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={menuOpen}
        headerStyle={{ display: "none" }}
      >
        <div className=" flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">HOME</h2>
            <p className="ml-4 text-lg font-semibold">Rate Top Games</p>
            <h2 className="mt-2 text-2xl font-semibold">REVIEWS</h2>
            <h2 className="mt-2 text-2xl font-semibold">BROWSE</h2>
            <ul className="text-lg font-semibold">
              <li className="ml-4">Reviews</li>
              <li>Collections</li>
              <li>Platforms</li>
              <li>Stores</li>
              <li>Genres</li>
              <li>Creators</li>
              <li>Tags</li>
              <li>Developers</li>
              <li>Publishers</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FontAwesomeIcon
              icon={faX}
              className=" self-end text-2xl"
              onClick={onClose}
            />
            <div className="flex flex-col items-center">
              <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-second-color">
                <FontAwesomeIcon icon={faRightToBracket} className="text-3xl" />
              </div>
              <span className="mt-1 font-semibold">Log in</span>
              <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-second-color">
                <FontAwesomeIcon icon={faUserPlus} className="text-3xl" />
              </div>
              <span className="mt-1 font-semibold">Sign up</span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default MobileMenu;
