import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useUpdateUser } from "../../hooks/authentication/useUpdateUser.js";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { errorNotify, successNotify } from "../../helpers/toaster/toast.js";
import SmallSpinner from "../../ui/Loading/SmallSpinner.jsx";

const SettingsProfile = () => {
  const { data: user } = useGetUser();
  const userAvatar = user?.user_metadata.avatar;
  const username = user?.user_metadata.username;
  const userFullName = user?.user_metadata.fullName;
  const userBio = user?.user_metadata.bio;
  const getFirstLetter = username.charAt(0).toUpperCase();
  const [updateFullName, setUpdateFullName] = useState(userFullName);
  const [updateBio, setUpdateBio] = useState(userBio);
  const [avatar, setAvatar] = useState(userAvatar);
  const queryClient = useQueryClient();

  console.log(userAvatar, avatar);

  const updatePayload = {
    fullName: updateFullName,
    bio: updateBio,
    avatar,
  };

  const { updateMutate, updateLoading } = useUpdateUser(updatePayload);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      userFullName !== updateFullName ||
      userBio !== updateBio ||
      userAvatar !== avatar
    ) {
      updateMutate(
        { updatePayload },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            successNotify("You have updated your profile!");
          },
        },
      );
    } else {
      errorNotify("You haven't changed anything!");
    }
  };

  return (
    <div className="mx-auto max-w-[600px] px-2 tablet:max-w-full">
      <h2 className="mb-4 text-lg text-info-color">Avatar</h2>
      <form className="flex flex-col gap-5" onSubmit={handleUpdate}>
        <div className="flex items-center gap-4">
          {!userAvatar && !updateLoading ? (
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-default-profile-avatar">
              <span className="text-xl font-bold">{getFirstLetter}</span>
            </div>
          ) : (
            <img
              src={userAvatar}
              alt=""
              className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
            />
          )}
          <input
            id="avatar"
            type="file"
            className="cursor-pointer rounded-xl border-2 border-button-color p-2 file:rounded-lg file:border-none file:bg-button-color file:px-2 file:py-1 file:text-white"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col gap-5 tablet:flex-row">
          <input
            value={updateFullName}
            onChange={(e) => setUpdateFullName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="formInput placeholder:text-info-color disabled:opacity-60"
            disabled={updateLoading}
          />

          <input
            value={username}
            type="text"
            placeholder="Username"
            className="formInput placeholder:text-info-color disabled:cursor-not-allowed disabled:opacity-60"
            disabled={true}
          />
        </div>
        <textarea
          value={updateBio}
          onChange={(e) => setUpdateBio(e.target.value)}
          placeholder="Bio"
          className="formTextarea placeholder:text-info-color disabled:opacity-60"
          rows={7}
          disabled={updateLoading}
        />
        <button
          className="inputButton disabled:cursor-not-allowed disabled:opacity-60"
          disabled={updateLoading}
        >
          {!updateLoading ? "Save" : <SmallSpinner />}
        </button>
      </form>
    </div>
  );
};

export default SettingsProfile;
