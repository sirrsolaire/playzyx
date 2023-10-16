import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export const AddToSection = ({ data }) => {
  return (
    <div className="mt-5 flex items-center justify-center gap-2 tablet:justify-start">
      <div className="flex w-56 cursor-pointer items-center justify-between rounded-lg bg-white px-3 py-1 shadow-md">
        <div className="flex flex-col text-black">
          <span className="text-sm font-semibold opacity-50">Add to</span>
          <span className="font-semibold">My games</span>
        </div>
        <FontAwesomeIcon icon={faPlusCircle} className="text-2xl text-black" />
      </div>
      <div className="flex w-56 cursor-pointer items-center justify-between rounded-lg border-[1px] border-white px-3 py-1 shadow-md">
        <div className="flex flex-col text-white">
          <span className="text-sm font-semibold opacity-50">Add to</span>
          <span className="font-semibold">
            Wishlist{" "}
            <span className="font-normal opacity-50">
              {data?.added_by_status.toplay}
            </span>
          </span>
        </div>
        <FontAwesomeIcon icon={faGift} className="text-2xl text-white" />
      </div>
    </div>
  );
};
