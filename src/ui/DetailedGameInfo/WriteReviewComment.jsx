import { Icon } from "@iconify/react";

export const WriteReviewComment = ({ data }) => {
  return (
    <div className=" mx-auto mt-4 max-w-[500px] gap-2 space-y-1 tablet:mx-0 tablet:flex tablet:space-y-0">
      <div className="group flex cursor-pointer items-center justify-center gap-2 rounded-md bg-button-color px-4 py-3  text-center transition-all duration-200 hover:bg-white hover:text-black">
        <Icon
          icon="ic:round-plus"
          className="text-xl opacity-50 group-hover:opacity-100"
        />
        <span className="tracking-wide opacity-50 group-hover:opacity-100">
          Write a review {data?.reviews_count}
        </span>
      </div>
      <div className="group flex cursor-pointer items-center justify-center gap-2 rounded-md bg-button-color px-4 py-3 text-center transition-all duration-200 hover:bg-white hover:text-black">
        <Icon
          icon="iconamoon:comment"
          className="text-xl opacity-50 group-hover:opacity-100"
        />
        <span className="tracking-wide opacity-50 group-hover:opacity-100">
          Write a comment
        </span>
      </div>
    </div>
  );
};