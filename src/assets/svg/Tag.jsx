import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tag() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faHashtag} className="icon" />
    </div>
  );
}

export default Tag;
