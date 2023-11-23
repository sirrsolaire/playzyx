import { Icon } from "@iconify/react";

const SliderPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Icon
      icon="ooui:previous-ltr"
      onClick={onClick}
      className="absolute left-2 top-1/2 z-40 -translate-y-1/2 cursor-pointer text-4xl opacity-60 transition-all duration-200 hover:opacity-100 tablet:-top-8 tablet:left-[830px] tablet:border-[3px] tablet:px-1 desktopFirst:left-[880px]"
    />
  );
};

export default SliderPrevArrow;
