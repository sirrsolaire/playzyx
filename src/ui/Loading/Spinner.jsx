import { ColorRing } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className="mb-10 mt-6 flex justify-center">
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          backgroundColor: "#202020",
          width: 100,
        }}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
