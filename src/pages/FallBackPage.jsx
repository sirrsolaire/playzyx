import SideMenu from "../ui/SideMenu/SideMenu.jsx";
import { FloatSideMenu } from "../ui/Buttons/FloatButton.jsx";
import FallBackContent from "../ui/General/FallBackContent.jsx";

function FallBackPage() {
  return (
    <>
      <div className="px-5 tablet:flex tablet:px-10">
        <section className="w-full">
          <FallBackContent />
        </section>
        <SideMenu />
        <FloatSideMenu hidden="desktopFirstHalf:hidden" />
      </div>
    </>
  );
}

export default FallBackPage;
