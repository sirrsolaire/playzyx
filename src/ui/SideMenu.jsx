import { ConfigProvider, Drawer, FloatButton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSideMenuOpen } from "../slices/mobileMenuSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SideMenuContent from "./SideMenuContent";

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
        bodyStyle={{ backgroundColor: "black" }}
        onClose={sideMenuClose}
        open={sideMenuDrawerOpen}
        headerStyle={{ display: "none" }}
        height={"100vh"}
      >
        <div className="relative h-full">
          <SideMenuContent />

          <ConfigProvider
            theme={{
              components: {
                FloatButton: {
                  colorText: "black",
                  colorBgElevated: "white",
                },
              },
            }}
          >
            <FloatButton
              icon={<FontAwesomeIcon icon={faX} />}
              onClick={sideMenuClose}
            />
          </ConfigProvider>
        </div>
      </Drawer>
    </>
  );
};
export default SideMenu;
