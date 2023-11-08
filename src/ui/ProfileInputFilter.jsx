import { Icon } from "@iconify/react";

const ProfileInputFilter = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="border-input-border placeholder:text-input-border mb-5 rounded-none border-b-2 bg-transparent px-10 text-xl font-semibold placeholder:text-xl placeholder:font-normal"
      />
      <Icon
        icon="majesticons:search-line"
        className="text-input-border absolute top-1/2 -translate-y-1/2 text-2xl"
      />
    </div>
  );
};

export default ProfileInputFilter;
