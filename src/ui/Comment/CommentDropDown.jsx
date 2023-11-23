import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    label: <a href="https://www.antgroup.com">Newest first</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Oldest first</a>,
    key: "1",
  },
];
const CommentDropDown = () => (
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
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="cursor-pointer text-sm">
          Newest First
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  </ConfigProvider>
);
export default CommentDropDown;
