import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { setFirstSelect } from "../slices/filterSlice.js";
import { useDispatch, useSelector } from "react-redux";

const items = [
  {
    key: "",
    label: "Relevance",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "-release",
    label: "Release date",
  },
  {
    key: "-rating",
    label: "Popularity",
  },
  {
    key: "-metacritic",
    label: "Meta critic",
  },
];
export const OrderFilter = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.filtering.firstSelect)
 

    const onClick = ({ key }) => {
        dispatch(setFirstSelect(key))
    };

    const ordering = () => {
      if (order === "-release") {
        return "Release Date"
      } else if (order === "") {
        return "Relevance"
      } else if (order === "name" ) {
        return "Name"
      } else if (order === "-rating") {
        return "Popularity"
      } else if (order === "-metacritic") {
        return "Metacritic"
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
          items, onClick
        }}
        className="cursor-pointer"
        trigger="click"
      >
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Space className="border-2 py-2 px-3 tablet:w-48 flex justify-between rounded-xl border-gray-5 hover:border-red-5 w-44">
            <div className="flex items-center gap-1">
              <span className="text-sm hidden tablet:flex">

              Order:
              </span>
              <span className="font-semibold">{ordering()}</span>
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
