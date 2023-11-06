import { Icon } from "@iconify/react";

const FavoriteGame = () => {
  return (
    <div
      className="flex h-[200px] w-full  cursor-pointer flex-col items-center justify-between rounded-lg bg-button-color py-3 transition-all duration-200 hover:bg-second-color tablet:h-[230px]
      "
    >
      <Icon icon="mingcute:add-fill" className="text-xl text-mobile-comment" />
      <span className="text-xl text-mobile-comment">Add Game</span>
    </div>
  );
};

export default FavoriteGame;
