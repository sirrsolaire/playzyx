import { useDispatch, useSelector } from "react-redux";
import { setModalType } from "../slices/modalSlice.js";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/Auth/useRegister.js";
import { useNavigate } from "react-router";
import { generalError, registerNotify } from "../helpers/toaster/toast.js";
import SmallSpinner from "./SmallSpinner.jsx";
import {
  setRegisterEmail,
  setRegisterPassword,
  setRegisterUsername,
} from "../slices/authSlice.js";

const RegisterForm = () => {
  const registerUsername = useSelector((state) => state.auth.registerUsername);
  const registerEmail = useSelector((state) => state.auth.registerEmail);
  const registerPassword = useSelector((state) => state.auth.registerPassword);
  const registerPayload = {
    username: registerUsername,
    email: registerEmail,
    password: registerPassword,
  };
  const { registerMutate, registerLoading } = useRegister(registerPayload);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    registerMutate(
      { registerPayload },
      {
        onSuccess: () => {
          navigate("/login", { replace: true });
          registerNotify();
          dispatch(setRegisterUsername(""));
          dispatch(setRegisterEmail(""));
          dispatch(setRegisterPassword(""));
        },
        onError: (err) => {
          console.log(err.message);
          generalError(err.message);
          dispatch(setRegisterUsername(""));
          dispatch(setRegisterEmail(""));
          dispatch(setRegisterPassword(""));
        },
      },
    );
  };

  return (
    <div className="flex flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mb-10 text-center text-3xl font-semibold text-white">
          Sign up
        </h2>
        <form
          className="space-y-6"
          method="POST"
          onSubmit={handleRegisterSubmit}
        >
          <div>
            <label
              htmlFor="text"
              className="block text-base font-medium leading-6 tracking-wide text-white"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                value={registerUsername}
                onChange={(e) => dispatch(setRegisterUsername(e.target.value))}
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-semibold leading-6 tracking-wide text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={registerEmail}
                onChange={(e) => dispatch(setRegisterEmail(e.target.value))}
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
            </div>
            <div className="mt-2">
              <input
                value={registerPassword}
                onChange={(e) => dispatch(setRegisterPassword(e.target.value))}
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
              {!registerLoading ? " Sign Up" : <SmallSpinner />}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-white transition-all duration-200 hover:text-indigo-400 hover:underline"
            onClick={() => dispatch(setModalType("login"))}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterForm;
