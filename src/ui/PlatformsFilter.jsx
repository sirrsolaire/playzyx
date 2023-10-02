import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setChildPlatform } from "../slices/filterSlice.js";

const items = [
  {
    key: 4,
    label: "PC",
  },
  {
    label: "PlayStation",
    children: [
      {
        key: 18,
        label: "PlayStation 4",
      },
      {
        key: 16,
        label: "PlayStation 3",
      },
    ],
  },
  {
    label: "Xbox",
    children: [
      {
        key: 1,
        label: "Xbox One",
      },
      {
        key: 14,
        label: "Xbox 360",
      },
      {
        key: 186,
        label: "Xbox Series S/X",
      },
    ],
  },
  {
    key: 3,
    label: "iOS",
  },
  {
    key: 8,
    label: "Android",
  },
  {
    key: 5,
    label: "Mac",
  },
  {
    key: 6,
    label: "Linux",
  },
  {
    key: 7,
    label: "Nintendo",
  },
];
export const PlatformsFilter = () => {
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.filtering.platform);


  const onClick = ({ key }) => {
        dispatch(setChildPlatform(key))
    };

  const filteredPlatform = () => {
    if (platform === 4) {
      return "PC"
    } else if (platform === 18) {
      return "PlayStation 4"
    } else if (platform === 16 ) {
      return "PlayStation 3"
    } else if (platform === 1) {
      return "Xbox One"
    } else if (platform === 14) {
      return "Xbox 360"
    } else if (platform === 186) {
      return "Xbox Series S/X"
    } else if ( platform === 3) {
      return "iOS"
    } else if (platform === 8) {
      return "Android"
    } else if (platform === 5) {
      return "Mac"
    } else if (platform === 6) {
      return "Linux"
    } else if (platform === 7) {
      return "Nintendo"
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorText: "white",
            colorBgElevated: "#202020",
            colorTextDescription: "white",
            controlItemBgHover: "#393e46"
            
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
          <Space className="w-44 flex tablet:w-56 justify-between rounded-xl border-2 border-gray-5 px-3 py-2 hover:border-red-5">
            <div className="flex items-center gap-1">
              <span className="text-sm  hidden tablet:flex">Platform:</span>
              <span className="font-semibold">{filteredPlatform()}</span>
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
