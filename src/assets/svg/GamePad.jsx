import { faSteamSymbol } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GamePad() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faSteamSymbol} className="icon" />
    </div>
  );
}

export default GamePad;
