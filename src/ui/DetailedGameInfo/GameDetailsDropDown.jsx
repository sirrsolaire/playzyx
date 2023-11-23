import { ConfigProvider, Dropdown } from "antd";
import { Icon } from "@iconify/react";

const GameDetailsDropDown = ({
  children,
  data,
  handleSetStatus,
  getStatus,
}) => {
  const list = [
    {
      id: 1,
      title: "Uncategorized",
      desc: " I'll pick the category later",
      icon: <Icon icon="fa-solid:dice-d20" className="text-xl" />,
      status: "uncategorized",
    },
    {
      id: 2,
      title: "Currently playing",
      desc: "I play the game regularly",
      icon: <Icon icon="vaadin:gamepad" className="text-xl" />,
      status: "currently_playing",
    },
    {
      id: 3,
      title: "Completed",
      desc: "I reached my goal in the game",
      icon: <Icon icon="bi:trophy-fill" className="text-xl" />,
      status: "completed",
    },
    {
      id: 4,
      title: "Played",
      desc: "I gave up and won't play it anymore",
      icon: <Icon icon="subway:mark-3" className="text-xl" />,
      status: "played",
    },
    {
      id: 5,
      title: "Not played",
      desc: "I'll play it later",
      icon: <Icon icon="subway:mark-4" className="text-xl" />,
      status: "not_played",
    },
  ];

  const items = list.map((item, index) => {
    const isSelected = getStatus === item.status;

    return {
      label: (
        <div
          className="flex items-center justify-between gap-3 py-2"
          key={index}
          onClick={() => handleSetStatus(item.status)}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <div className="flex flex-col">
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-info-color">{item.desc}</p>
            </div>
          </div>
          {isSelected && (
            <Icon
              icon="icon-park-solid:check-one"
              className="text-xl text-white transition-all duration-200 group-hover:text-white"
            />
          )}
        </div>
      ),
      key: item.id,
    };
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: "#222222",
          colorText: "#ffffff",
          controlItemBgHover: "#151515",
        },
      }}
    >
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <div>{children}</div>
      </Dropdown>
    </ConfigProvider>
  );
};

export default GameDetailsDropDown;
