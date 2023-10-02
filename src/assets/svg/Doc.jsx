import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Doc() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faFolderOpen} className="icon" />
    </div>
  );
}

export default Doc;
