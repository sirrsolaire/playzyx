import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SmallSpinner = ({ color, font }) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: font ? font : 24,
        color: color,
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
};

export default SmallSpinner;
