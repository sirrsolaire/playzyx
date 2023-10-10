import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import {
  faC,
  faD,
  faGamepad,
  faGhost,
  faMobileScreenButton,
  faN,
  faS,
  faW,
} from "@fortawesome/free-solid-svg-icons";

export const ParentPlatformsIcon = ({ id }) => {
  const selectIcon = (id) => {
    if (id === 2) {
      return faPlaystation;
    } else if (id === 1) {
      return faWindows;
    } else if (id === 5) {
      return faApple;
    } else if (id === 3) {
      return faXbox;
    } else if (id === 4) {
      return faMobileScreenButton;
    } else if (id === 8) {
      return faAndroid;
    } else if (id === 6) {
      return faLinux;
    } else if (id === 7) {
      return faGamepad;
    } else if (id === 9) {
      return faGhost;
    } else if (id === 10) {
      return faC;
    } else if (id === 11) {
      return faS;
    } else if (id === 12) {
      return faD;
    } else if (id === 13) {
      return faN;
    } else if (id === 14) {
      return faW;
    }
  };

  return (
    <div className="">
      <FontAwesomeIcon icon={selectIcon(id)} className="" />
    </div>
  );
};
