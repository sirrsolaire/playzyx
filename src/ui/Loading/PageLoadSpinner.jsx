import { Oval } from "react-loader-spinner";

const PageLoadSpinner = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#ffffff"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default PageLoadSpinner;
