import { Collapse } from "antd";

const CollapseLibrary = ({ icon, title }) => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
            </div>
          ),
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};

export default CollapseLibrary;
