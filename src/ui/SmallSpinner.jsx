import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SmallSpinner = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#202020",
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
};

export default SmallSpinner;
