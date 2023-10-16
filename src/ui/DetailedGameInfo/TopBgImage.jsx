export const TopBgImage = ({ data }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${data?.background_image})`,
  };

  return (
    <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
      <div className="h-[600px]">
        <div
          style={containerStyle}
          className="z-10 h-[600px] bg-transparent bg-cover bg-top"
        ></div>
      </div>
    </div>
  );
};
