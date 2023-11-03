import { useGetUser } from "../hooks/Auth/useGetUser.js";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import PageLoadSpinner from "../ui/PageLoadSpinner.jsx";

const ProtectedRoute = () => {
  const { data: user, isLoading } = useGetUser();
  const isAuthenticated = user?.role === "authenticated";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isLoading, navigate, isAuthenticated]);

  if (isLoading) {
    return <PageLoadSpinner />;
  }

  if (isAuthenticated) return <Outlet />;
};

export default ProtectedRoute;
