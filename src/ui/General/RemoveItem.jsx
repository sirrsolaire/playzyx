import { Icon } from "@iconify/react";
import SmallSpinner from "../Loading/SmallSpinner.jsx";

function RemoveItem({ remove, loading, loading2 }) {
  return (
    <div
      className="durationAll flex h-7  w-8 cursor-pointer items-center justify-center rounded-md bg-second-color text-white hover:bg-white hover:text-black"
      onClick={remove}
    >
      {loading2 || loading ? (
        <SmallSpinner color="black" font={20} />
      ) : (
        <Icon icon="ion:trash-bin" className="text-xl" />
      )}
    </div>
  );
}

export default RemoveItem;
