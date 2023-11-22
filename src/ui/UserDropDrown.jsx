import { ConfigProvider, Dropdown } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const UserDropDown = ({ handleLogout, username }) => {
  const items = [
    {
      label: <Link to={`/profile/${username}/overview`}>Profile</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex items-center gap-3" onClick={handleLogout}>
          <span>Log out</span>
          <Icon icon="mingcute:exit-fill" className="h-5 w-5 " />
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "white",
          colorBgElevated: "#202020",
          colorTextDescription: "white",
          controlItemBgHover: "#393e46",
          fontSize: 16,
          colorSplit: "hsla(0,0%,100%,.4)",
        },
      }}
    >
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Icon
          icon="uiw:setting"
          onClick={(e) => e.preventDefault()}
          className="ml-5 h-7 w-7 cursor-pointer transition-all duration-200 hover:text-info-color"
        />
      </Dropdown>
    </ConfigProvider>
  );
};

export default UserDropDown;
