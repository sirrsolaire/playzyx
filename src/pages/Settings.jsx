import Header from "../ui/Header.jsx";
import { FloatSideMenu } from "../ui/FloatButton.jsx";
import SettingsContent from "../ui/SettingsContent.jsx";

const Settings = () => {
  return (
    <>
      <Header />
      <div className="tablet:flex tablet:px-10">
        <section className="w-full pb-36 tablet:mx-auto tablet:max-w-[960px]">
          <SettingsContent />
        </section>
        <FloatSideMenu />
      </div>
    </>
  );
};

export default Settings;
