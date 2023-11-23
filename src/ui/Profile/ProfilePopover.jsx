import { ConfigProvider, Popover } from "antd";
import { Icon } from "@iconify/react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../../assets/styles/antd.css";
import SmallSpinner from "../Loading/SmallSpinner.jsx";

const ProfilePopover = ({
  className,
  option1,
  option2,
  remove,
  loading,
  loading2,
  showModal,
}) => {
  const content = (
    <div className="flex flex-col divide-y-[1px] text-white">
      {option1 && (
        <div
          onClick={showModal}
          className="flex cursor-pointer items-center gap-1 px-2 py-1 text-base hover:rounded-lg hover:bg-game-info"
        >
          {loading2 ? <SmallSpinner color="white" /> : <EditOutlined />}
          <span>{option1}</span>
        </div>
      )}

      {option2 && (
        <div
          onClick={remove}
          className="flex cursor-pointer items-center gap-1 px-2 py-1 text-base hover:rounded-b-lg hover:bg-game-info"
        >
          {loading || loading2 ? (
            <SmallSpinner color="white" />
          ) : (
            <DeleteOutlined />
          )}
          <span>{option2}</span>
        </div>
      )}
    </div>
  );

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
        trigger="click"
        placement="bottomLeft"
        arrow={false}
      >
        <Icon
          icon="fe:elipsis-h"
          className={`cursor-pointer text-xl text-info-color ${className}`}
        />
      </Popover>
    </ConfigProvider>
  );
};

export default ProfilePopover;
