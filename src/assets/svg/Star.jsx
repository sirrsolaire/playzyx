import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Star() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faStar} className="icon" />
    </div>
  );
}

export default Star;
