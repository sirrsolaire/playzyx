import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SmallSpinner = ({ color }) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: color,
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
};

export default SmallSpinner;
