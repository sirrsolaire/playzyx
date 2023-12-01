import { NavLink } from "react-router-dom";
import fallBackBg from "../../../public/images/fallback.jpg";

function FallBackContent() {
  const containerStyle = {
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.7), #151515),url(${fallBackBg})`,
    borderRadius: 7,
  };
  return (
    <>
      <div className="mx-auto flex h-screen max-w-[345px] flex-col items-center justify-center gap-11">
        <h1 className="text-[192px] leading-[1]">404</h1>
        <p className="text-center text-xl font-semibold">
          Whoops! <br />
          We could not find that page.
        </p>
        <NavLink to="/" className="inputButton">
          <button>Main Page</button>
        </NavLink>
      </div>
      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
        <div className="h-full">
          <div
            style={containerStyle}
            className="z-10 h-full bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </>
  );
}

export default FallBackContent;
