import { toast } from "react-toastify";

export const errorNotify = (errorMessage) =>
  toast.error(errorMessage, {
    position: "top-center",
    autoClose: 30000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });

export const successNotify = (notifyMessage) =>
  toast.success(notifyMessage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });

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
