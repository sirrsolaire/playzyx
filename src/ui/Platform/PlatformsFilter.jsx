import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setChildPlatform } from "../../reducers/filterSlice.js";
import { filteredPlatform } from "../../helpers/platformFilterLabel.js";

const items = [
  {
    key: 4,
    label: "PC",
  },
  {
    label: "PlayStation",
    children: [
      {
        key: 187,
        label: "PlayStation 5",
      },
      {
        key: 18,
        label: "PlayStation 4",
      },
      {
        key: 16,
        label: "PlayStation 3",
      },
      {
        key: 15,
        label: "PlayStation 2",
      },
      {
        key: 27,
        label: "PlayStation 1",
      },
      {
        key: 19,
        label: "PS Vita",
      },
      {
        key: 17,
        label: "PSP",
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
    key: 21,
    label: "Android",
  },
  {
    key: 5,
    label: "macOS",
  },
  {
    key: 55,
    label: "Classic Macintosh",
  },
  {
    key: 41,
    label: "Apple II",
  },
  {
    key: 6,
    label: "Linux",
  },
  {
    label: "Nintendo",
    children: [
      {
        key: 7,
        label: "Nintendo Switch",
      },
      {
        key: 8,
        label: "Nintendo 3DS",
      },
      {
        key: 9,
        label: "Nintendo DS",
      },
      {
        key: 13,
        label: "Nintendo DSi",
      },
      {
        key: 10,
        label: "Wii U",
      },
      {
        key: 11,
        label: "Wii",
      },
      {
        key: 83,
        label: "Nintendo 64",
      },
      {
        key: 79,
        label: "SNES",
      },
      {
        key: 49,
        label: "NES",
      },
      {
        key: 105,
        label: "GameCube",
      },
      {
        key: 24,
        label: "Game Boy Advance",
      },
      {
        key: 43,
        label: "Game Boy Color",
      },
      {
        key: 26,
        label: "Game Boy",
      },
    ],
  },
  {
    key: 166,
    label: "Commodore / Amiga",
  },
  {
    label: "Atari",
    children: [
      {
        key: 28,
        label: "Atari 7800",
      },
      {
        key: 31,
        label: "Atari 5200",
      },
      {
        key: 23,
        label: "Atari 2600",
      },
      {
        key: 22,
        label: "Atari Flashback",
      },
      {
        key: 25,
        label: "Atari 8-bit",
      },
      {
        key: 34,
        label: "Atari ST",
      },
      {
        key: 46,
        label: "Atari Lynx",
      },
      {
        key: 50,
        label: "Atari XEGS",
      },
    ],
  },
  {
    label: "SEGA",
    children: [
      {
        key: 107,
        label: "SEGA Saturn",
      },
      {
        key: 119,
        label: "SEGA CD",
      },
      {
        key: 117,
        label: "SEGA 32X",
      },
      {
        key: 74,
        label: "SEGa Master System",
      },
      {
        key: 106,
        label: "Dreamcast",
      },
      {
        key: 167,
        label: "Genesis",
      },
    ],
  },
  {
    key: 111,
    label: "3DO",
  },
  {
    key: 112,
    label: "Jaguar",
  },
  {
    key: 77,
    label: "Game Gear",
  },
  {
    key: 12,
    label: "Neo Geo",
  },
];
export const PlatformsFilter = () => {
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.filtering.platform);

  const onClick = ({ key }) => {
    dispatch(setChildPlatform(key));
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
              <span className="font-semibold">
                {filteredPlatform(platform)}
              </span>
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
