import { Icon } from "@iconify/react";

const SliderNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Icon
      icon="ooui:next-ltr"
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-4xl opacity-60 transition-all duration-200 hover:opacity-100 tablet:-top-8 tablet:right-0 tablet:border-[3px] tablet:px-1"
    />
  );
};

export default SliderNextArrow;
