import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen, setModalType } from "../reducers/modalSlice.js";
import { useLogin } from "../hooks/authentication/useLogin.js";
import { setPassword, setUsername } from "../reducers/authSlice.js";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { errorNotify, successNotify } from "../helpers/toaster/toast.js";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import SmallSpinner from "./SmallSpinner.jsx";

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginEmail = useSelector((state) => state.auth.email);
  const loginPassword = useSelector((state) => state.auth.password);
  const { loginLoading, loginMutate } = useLogin(loginEmail, loginPassword);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    loginMutate(
      { loginEmail, loginPassword },
      {
        onSuccess() {
          navigate("/", { replace: true });
          dispatch(setIsModalOpen(false));
          successNotify();
          dispatch(setUsername(""));
          dispatch(setPassword(""));
          queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError(err) {
          console.log(err.message);
          errorNotify();
          dispatch(setUsername(""));
          dispatch(setPassword(""));
        },
      },
    );
  };

  return (
    <div className="flex flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" mb-10 text-center text-3xl font-semibold text-white">
          Log in
        </h2>
        <form className="space-y-6" method="POST" onSubmit={handleLoginSubmit}>
          <div>
            <label
              htmlFor="text"
              className="block text-base font-semibold leading-6 tracking-wide text-white"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                value={loginEmail}
                onChange={(e) => dispatch(setUsername(e.target.value))}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-base font-semibold leading-6 tracking-wide text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#919090] transition-all duration-200 hover:text-indigo-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={loginPassword}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div>
            <button type="submit" className="inputButton">
              {!loginLoading ? "Sign in" : <SmallSpinner />}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-white transition-all duration-200 hover:text-indigo-400 hover:underline"
            onClick={() => dispatch(setModalType("register"))}
          >
            Join us here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
