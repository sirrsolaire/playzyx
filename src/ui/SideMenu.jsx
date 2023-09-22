import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSideMenuOpen } from "../slices/mobileMenuSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const SideMenu = () => {
  const sideMenuDrawerOpen = useSelector((state) => state.menu.sideMenuOpen);
  const dispatch = useDispatch();

  const sideMenuClose = () => {
    dispatch(setSideMenuOpen(false));
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="top"
        className=" text-white"
        bodyStyle={{ backgroundColor: "#202020" }}
        onClose={sideMenuClose}
        open={sideMenuDrawerOpen}
        headerStyle={{ display: "none" }}
        height={"100vh"}
      >
        <div className="relative h-full">
          <FontAwesomeIcon
            icon={faX}
            onClick={sideMenuClose}
            className="absolute bottom-0 right-0 h-6 w-6 cursor-pointer rounded-full  bg-white px-2 py-2 text-black"
          />
        </div>
      </Drawer>
    </>
  );
};
export default SideMenu;
