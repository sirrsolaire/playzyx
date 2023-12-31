import { ConfigProvider, Drawer, FloatButton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSideMenuOpen } from "../../reducers/mobileMenuSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SideMenuContent from "./SideMenuContent.jsx";
import { useLocation } from "react-router";
import { useEffect } from "react";
import {
  setChildPlatform,
  setFirstSelect,
} from "../../reducers/filterSlice.js";
import { setLayout } from "../../reducers/layoutSlice.js";

const SideMenu = () => {
  const sideMenuDrawerOpen = useSelector((state) => state.menu.sideMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setSideMenuOpen(false));
    dispatch(setFirstSelect(""));
    dispatch(setChildPlatform(4));
    dispatch(setLayout("grid"));
  }, [location.pathname, dispatch]);

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        className=" text-white"
        bodyStyle={{ backgroundColor: "black" }}
        onClose={() => dispatch(setSideMenuOpen(false))}
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
                  colorBgElevated: "pink",
                  colorPrimary: "#202020",
                  colorTextLightSolid: "black",
                  colorFillContent: "#E4E1A1",
                },
              },
            }}
          >
            <FloatButton
              icon={<FontAwesomeIcon icon={faX} />}
              onClick={() => dispatch(setSideMenuOpen(false))}
            />
          </ConfigProvider>
        </div>
      </Drawer>
    </>
  );
};
export default SideMenu;
