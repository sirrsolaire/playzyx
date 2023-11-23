import Header from "../../ui/Header/Header.jsx";
import { FloatSideMenu } from "../../ui/Buttons/FloatButton.jsx";
import SettingsContent from "../../ui/Settings/SettingsContent.jsx";

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
