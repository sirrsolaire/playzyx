import { ConfigProvider, FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSideMenuOpen } from "../../reducers/mobileMenuSlice.js";

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
            colorBgElevated: "pink",
            colorPrimary: "#202020",
            colorTextLightSolid: "black",
            colorFillContent: "#E4E1A1",
          },
        },
      }}
    >
      <FloatButton
        icon={<FontAwesomeIcon icon={faBars} />}
        onClick={sideMenuOpen}
        className={`desktopFirstHalf:hidden `}
      />
    </ConfigProvider>
  );
};
