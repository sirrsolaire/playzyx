import { ConfigProvider, FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSideMenuOpen } from "../slices/mobileMenuSlice.js";

export const FloatSideMenu = () => {
  const dispatch = useDispatch();

  const sideMenuOpen = () => {
    dispatch(setSideMenuOpen(true));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          FloatButton: {
            colorText: "white",
            colorBgElevated: "black",
          },
        },
      }}
    >
      <FloatButton
        icon={<FontAwesomeIcon icon={faBars} />}
        onClick={sideMenuOpen}
        className="tablet:hidden"
      />
    </ConfigProvider>
  );
};
