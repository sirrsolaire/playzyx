import Header from "../../ui/Header/Header.jsx";
import loginBG from "../../../public/images/login-bg.jpg";
import PasswordRecoveryForm from "../../ui/Auth/PasswordRecoveryForm.jsx";
import { useEffect } from "react";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useNavigate } from "react-router";
import PageLoadSpinner from "../../ui/Loading/PageLoadSpinner.jsx";

function PasswordRecovery() {
  const { data: user, isLoading } = useGetUser();
  const isAuthenticated = user?.role === "authenticated";
  const navigate = useNavigate();
  const containerStyle = {
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.7), #151515),url(${loginBG})`,
    borderRadius: 7,
  };

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isLoading, navigate, isAuthenticated]);

  if (isLoading) {
    return <PageLoadSpinner />;
  }

  if (!isAuthenticated)
    return (
      <>
        <Header />
        <section className="mt-36">
          <PasswordRecoveryForm />
        </section>
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

export default PasswordRecovery;
