import { useUpdatePassword } from "../../hooks/authentication/useUpdatePassword.js";
import { useState } from "react";
import SmallSpinner from "../../ui/Loading/SmallSpinner.jsx";
import {
  errorNotify,
  generalError,
  successNotify,
} from "../../helpers/toaster/toast.js";

const SettingsMyPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [verifyNewPassword, setVerifyNewPassword] = useState("");
  const { passwordMutate, passwordLoading } = useUpdatePassword({
    newPassword,
  });

  const successMessage = "You have successfully changed your password";
  const dontMatchError = "Passwords do not match";
  const lessThanSixError = "Password must be at least 6 characters long";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 6 || verifyNewPassword.length < 6) {
      errorNotify(lessThanSixError);
    } else if (newPassword !== verifyNewPassword) {
      errorNotify(dontMatchError);
    } else {
      passwordMutate(
        { newPassword },
        {
          onSuccess: () => {
            successNotify(successMessage);
            setVerifyNewPassword("");
            setNewPassword("");
          },
          onError: (err) => {
            generalError(err.message);
          },
        },
      );
    }
  };

  return (
    <form
      className="mx-auto flex max-w-[400px] flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <input
        type="password"
        placeholder="New password"
        className="formInput placeholder:text-info-color disabled:cursor-not-allowed disabled:opacity-60"
        required
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={passwordLoading}
      />
      <input
        type="password"
        placeholder="Verify new password"
        className="formInput placeholder:text-info-color disabled:cursor-not-allowed disabled:opacity-60"
        required
        value={verifyNewPassword}
        onChange={(e) => setVerifyNewPassword(e.target.value)}
        disabled={passwordLoading}
      />
      <button
        className="inputButton disabled:cursor-not-allowed disabled:opacity-60"
        disabled={passwordLoading}
      >
        {!passwordLoading ? "Save" : <SmallSpinner />}
      </button>
    </form>
  );
};

export default SettingsMyPassword;
