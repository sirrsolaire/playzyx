import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import useAllPlatforms from "../../hooks/generals/useAllPlatforms.js";
import "../../assets/styles/DropDownMenu.css";
import { setBrowsePlatform } from "../../reducers/browseSlice.js";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { formattedSlug } from "../../helpers/platformFilterLetterConvertor.js";

export const BrowsePlatformFilter = () => {
  const { data } = useAllPlatforms();
  const { slug } = useParams();
  const dispatch = useDispatch();

  const items = data?.map((platform) => ({
    key: platform.id,
    label: <NavLink to={`/games/${platform.slug}`}>{platform.name}</NavLink>,
  }));

  const onClick = ({ key }) => {
    dispatch(setBrowsePlatform(key));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorText: "white",
            colorBgElevated: "#202020",
            colorTextDescription: "white",
            controlItemBgHover: "#393e46",
          },
        },
      }}
    >
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        className="cursor-pointer"
        trigger="click"
      >
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Space className="flex w-44 justify-between rounded-xl border-2 border-gray-5 px-3 py-2 hover:border-red-5 tablet:w-60">
            <div className="flex items-center gap-1">
              <span className="hidden  text-sm tablet:flex">Platform:</span>
              <span className="font-semibold">{formattedSlug(slug)}</span>
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
