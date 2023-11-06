import Header from "../ui/Header.jsx";
import RegisterForm from "../ui/ResgisterForm.jsx";
import signUp from "../../public/register-bg.jpg";
import { useGetUser } from "../hooks/authentication/useGetUser.js";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import PageLoadSpinner from "../ui/PageLoadSpinner.jsx";

const Register = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.7), #151515),url(${signUp})`,
    borderRadius: 7,
  };
  const { data: user, isLoading } = useGetUser();
  const isAuthenticated = user?.role === "authenticated";
  const navigate = useNavigate();

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
          <RegisterForm />
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
};

export default Register;
