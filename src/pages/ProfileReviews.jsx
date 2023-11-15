import ProfilePopover from "../ui/ProfilePopover.jsx";

const ProfileReviews = () => {
  return (
    <div className="flex flex-col rounded bg-border-color px-6 py-5">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold underline underline-offset-4">
          Baldurs Gate 3
        </h2>
        <ProfilePopover />
      </div>
      <p className="mb-5 text-sm opacity-80">
        Byssuss congregabo, tanquam bi-color abaculus.Everything we do is
        connected with blessing: reincarnation, surrender, light, result. All
        children like shaked celeries in lime and cinnamon.
      </p>
      <ul className="mb-4 flex items-center gap-1 text-[11px] uppercase">
        <li className="w-fit rounded-full bg-tag-color px-3 py-1 tracking-widest">
          best
        </li>
        <li className="w-fit rounded-full bg-tag-color px-3 py-1 tracking-widest">
          old
        </li>
        <li className="w-fit rounded-full bg-tag-color px-3 py-1 tracking-widest">
          bok gibi
        </li>
      </ul>
      <div className="flex flex-col">
        <span className="text-xs">artorias</span>
        <span className="text-xs text-info-color">3 minutes ago</span>
      </div>
    </div>
  );
};

export default ProfileReviews;
