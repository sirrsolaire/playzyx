import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

function Ghost() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faGhost} className="icon" />
    </div>
  );
}

export default Ghost;
