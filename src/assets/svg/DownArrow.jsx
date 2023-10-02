import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DownArrow() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faDownload} className="icon" />
    </div>
  );
}

export default DownArrow;
