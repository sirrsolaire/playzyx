import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { SiNintendoswitch } from "react-icons/si";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export const Platform = ({ platforms, className }) => {
  return (
    <div className="flex gap-2">
      {platforms?.includes("Xbox One") && (
        <FontAwesomeIcon icon={faXbox} className={className} />
      )}
      {platforms?.includes("PlayStation 4") && (
        <FontAwesomeIcon icon={faPlaystation} className={className} />
      )}
      {platforms?.includes("Nintendo Switch") && (
        <SiNintendoswitch className={className} />
      )}
      {platforms?.includes("Linux") && (
        <FontAwesomeIcon icon={faLinux} className={className} />
      )}
      {platforms?.includes("PC") && (
        <FontAwesomeIcon icon={faWindows} className={className} />
      )}
      {platforms?.includes("Android") && (
        <FontAwesomeIcon icon={faAndroid} className={className} />
      )}
      {platforms?.includes("iOS") && (
        <FontAwesomeIcon icon={faMobileScreenButton} className={className} />
      )}
      {platforms?.includes("Macintosh") && (
        <FontAwesomeIcon icon={faApple} className={className} />
      )}
    </div>
  );
};
