import { toast } from "react-toastify";

export const errorNotify = () =>
  toast.error("Invalid username or password!", {
    position: "top-center",
    autoClose: 30000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });

export const successNotify = () =>
  toast.success("You have successfully logged in.", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });

export const registerNotify = () =>
  toast.success(
    "You have successfully created an account. Please click the activation link we sent to your email",
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    },
  );

export const generalError = (message) =>
  toast.error(`Something went wrong! ${message}`, {
    position: "top-center",
    autoClose: 30000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
