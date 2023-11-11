import Header from "../ui/Header.jsx";
import { DesktopSideMenu } from "../ui/DesktopSideMenu.jsx";
import SideMenu from "../ui/SideMenu.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";
import ProfileContent from "../ui/ProfileContent.jsx";
import AddGameModal from "../ui/AddGameModal.jsx";
import { useSelector } from "react-redux";

const Profile = () => {
  const isOpen = useSelector((state) => state.modal.searchModalOpen);

  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <div className="hidden h-fit desktopFirstHalf:block">
          <DesktopSideMenu />
        </div>
        <section className="w-full pb-36 tablet:mx-auto tablet:max-w-[960px]">
          <ProfileContent />
        </section>
        <SideMenu />
        <FloatSideMenu />
      </div>
      {isOpen && <AddGameModal />}
    </>
  );
};

export default Profile;
