import { ConfigProvider, Popover } from "antd";
import { Icon } from "@iconify/react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../assets/styles/antd.css";

const content = (
  <div className="flex flex-col divide-y-[1px] text-white">
    <div className="flex cursor-pointer items-center gap-1 px-2 py-1 text-base hover:rounded-lg hover:bg-game-info">
      <EditOutlined />
      <span>Edit</span>
    </div>
    <div className="flex cursor-pointer items-center gap-1 px-2 py-1 text-base hover:rounded-b-lg hover:bg-game-info ">
      <DeleteOutlined />
      <span>Delete</span>
    </div>
  </div>
);

const CommentPopover = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: "#181818",
        },
      }}
    >
      <Popover
        content={content}
        trigger="hover"
        placement="bottomLeft"
        arrow={false}
      >
        <Icon
          icon="fe:elipsis-h"
          className="cursor-pointer text-xl text-info-color"
        />
      </Popover>
    </ConfigProvider>
  );
};

export default CommentPopover;
