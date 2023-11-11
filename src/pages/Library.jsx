import CollapseLibrary from "../ui/CollapseLibrary.jsx";
import { ConfigProvider } from "antd";
import { Icon } from "@iconify/react";
import ProfileInputFilter from "../ui/ProfileInputFilter.jsx";

const Library = () => {
  return (
    <div className="px-1">
      <ProfileInputFilter placeholder="Search my library" />
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorBgContainer: "transparent",
              colorText: "rgb(114, 114, 114)",
              colorTextHeading: "rgb(114, 114, 114)",
              padding: 0,
            },
          },
        }}
      >
        <CollapseLibrary
          title="All Games"
          icon={<Icon icon="fa-solid:dice-d20" className="text-2xl" />}
        />
        <CollapseLibrary
          title="Not played"
          icon={<Icon icon="subway:mark-4" className="text-2xl" />}
        />
        <CollapseLibrary
          title="Played"
          icon={<Icon icon="subway:mark-3" className="text-2xl" />}
        />
        <CollapseLibrary
          title="Currently playing"
          icon={<Icon icon="vaadin:gamepad" className="text-2xl" />}
        />
        <CollapseLibrary
          title="Completed"
          icon={<Icon icon="bi:trophy-fill" className="text-2xl" />}
        />
      </ConfigProvider>
    </div>
  );
};

export default Library;