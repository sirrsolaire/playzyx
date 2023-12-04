import { useRecover } from "../../hooks/authentication/useRecover.js";
import { useState } from "react";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import SmallSpinner from "../Loading/SmallSpinner.jsx";

function PasswordRecoveryForm() {
  const [email, setEmail] = useState("");
  const { recoverMutate, recoverLoading } = useRecover();

  const handleSubmit = (e) => {
    e.preventDefault();
    recoverMutate(
      {
        email,
      },
      {
        onSuccess: () => {
          successNotify(
            "We sent an email with a password-reset link. Check it.",
          );
        },
        onError: (err) => {
          generalError(err.message);
        },
      },
    );
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-8 px-6 lg:px-8">
      <div className="sm:w-full sm:max-w-sm">
        <h2 className=" mb-10 text-center text-3xl font-semibold text-white">
          Password Recovery
        </h2>
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="text"
              className="block text-base font-semibold leading-6 tracking-wide text-white"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="formInput"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inputButton disabled:cursor-not-allowed disabled:opacity-50"
            disabled={recoverLoading}
          >
            {!recoverLoading ? "Send" : <SmallSpinner />}
          </button>
        </form>
      </div>
      <p className="text-center text-3xl">
        You will receive an email with a password-reset link
      </p>
    </div>
  );
}

export default PasswordRecoveryForm;
