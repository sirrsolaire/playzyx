import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilterByDate } from "../../reducers/filterSlice.js";

const CommentDropDown = () => {
  const items = [
    {
      label: <span>Newest first</span>,
      key: "0",
    },
    {
      label: <span>Oldest first</span>,
      key: "1",
    },
  ];

  const dispatch = useDispatch();
  const filterByDate = useSelector((state) => state.filtering.filterByDate);

  const onClick = ({ key }) => {
    dispatch(setFilterByDate(key));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorBgElevated: "#202020",
            colorText: "white",
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
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="cursor-pointer text-base">
            {filterByDate === "0" ? "Newest First" : "Oldest First"}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>
  );
};
export default CommentDropDown;
