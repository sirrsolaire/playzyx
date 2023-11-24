import { getTimeAgo } from "../../helpers/dateConvertor.js";

function ReplyItem({ reply, createdAt, username, avatar }) {
  return (
    <div className="mx-auto w-[98%] rounded-xl bg-[rgba(0,0,0,.5)] px-6 py-4">
      <p className="mb-5 text-sm opacity-70">{reply}</p>
      <div className="flex items-center gap-3">
        {!avatar ? (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-default-profile-avatar">
            <span className="text-2xl  font-bold ">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
        ) : (
          <img src={avatar} alt={`${username}'s avatar`} className="h-9 w-9" />
        )}
        <div className="flex flex-col text-xs">
          <span>{username}</span>
          <span className="text-info-color">{getTimeAgo(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
