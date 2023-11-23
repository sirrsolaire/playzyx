import { Icon } from "@iconify/react";

const ProfileInputFilter = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder={placeholder}
        className="mb-5 w-full rounded-none border-b-2 border-input-border bg-transparent px-10 py-2 text-xl font-semibold ring-0 placeholder:text-xl placeholder:font-normal placeholder:text-input-border focus:outline-none focus:ring-0"
      />
      <Icon
        icon="majesticons:search-line"
        className="absolute top-0 translate-y-1/2 text-2xl text-input-border"
      />
    </div>
  );
};

export default ProfileInputFilter;
