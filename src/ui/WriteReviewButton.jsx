import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function WriteReviewButton({ handleNavigate }) {
  return (
    <div
      className="mt-4 w-full cursor-pointer rounded-xl bg-[rgba(0,0,0,.5)] transition-all duration-200 hover:bg-white hover:text-black"
      onClick={handleNavigate}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4 text-xl">
        <FontAwesomeIcon icon={faPlus} />
        <span>Write a review</span>
      </div>
    </div>
  );
}

export default WriteReviewButton;
