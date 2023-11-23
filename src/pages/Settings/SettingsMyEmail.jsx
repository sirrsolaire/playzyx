import { useState } from "react";
import {
  errorNotify,
  generalError,
  successNotify,
} from "../../helpers/toaster/toast.js";
import { useUpdateEmail } from "../../hooks/authentication/useUpdateEmail.js";
import SmallSpinner from "../../ui/Loading/SmallSpinner.jsx";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";

const SettingsMyEmail = () => {
  const { data: user } = useGetUser();
  const { email: userEmail } = user;
  const [newEmail, setNewEmail] = useState("");
  const [verifyNewEmail, setVerifyNewEmail] = useState("");
  const { emailMutate, emailLoading } = useUpdateEmail({ newEmail });

  const successMessage =
    "Please click the activation link we sent to your email";
  const dontMatchError = "Emails do not match!";
  const sameError = "Please enter different email address!";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newEmail !== verifyNewEmail) {
      errorNotify(dontMatchError);
    } else if (newEmail === userEmail) {
      errorNotify(sameError);
    } else {
      emailMutate(
        { newEmail },
        {
          onSuccess: () => {
            successNotify(successMessage);
            setVerifyNewEmail("");
            setNewEmail("");
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
        value={userEmail}
        type="text"
        placeholder="email"
        className="formInput placeholder:text-info-color disabled:cursor-not-allowed disabled:opacity-60"
        disabled={true}
      />
      <input
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        type="email"
        placeholder="New email"
        className="formInput placeholder:text-info-color disabled:cursor-not-allowed disabled:opacity-60"
        required
        disabled={emailLoading}
      />
      <input
        value={verifyNewEmail}
        onChange={(e) => setVerifyNewEmail(e.target.value)}
        type="email"
        placeholder="Verify email"
        className="formInput placeholder:text-info-color disabled:cursor-not-allowed disabled:opacity-60"
        required
        disabled={emailLoading}
      />
      <button className="inputButton disabled:cursor-not-allowed disabled:opacity-60">
        {!emailLoading ? "Save" : <SmallSpinner />}
      </button>
    </form>
  );
};

export default SettingsMyEmail;
