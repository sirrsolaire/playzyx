import { Collapse } from "antd";

const CollapseLibrary = ({ icon, title, children, categoryCounts }) => {
  return (
    <Collapse
      expandIconPosition="end"
      bordered={false}
      items={[
        {
          key: "1",
          label: (
            <div className="flex items-center gap-3">
              {icon}
              <span className="text-xl">{title}</span>
              <span>{categoryCounts || 0}</span>
            </div>
          ),
          children: (
            <div className="grid grid-cols-1 gap-3 smallTb:grid-cols-2 tablet:grid-cols-3">
              {children}
            </div>
          ),
        },
      ]}
    />
  );
};

export default CollapseLibrary;
