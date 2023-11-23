import SideMenuContent from "./SideMenuContent.jsx";

export const DesktopSideMenu = () => {
  return (
    <aside className="hidden w-[250px] text-white tablet:mt-12 tablet:flex tablet:flex-col">
      <SideMenuContent />
    </aside>
  );
};
