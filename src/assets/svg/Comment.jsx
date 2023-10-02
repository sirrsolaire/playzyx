import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function Comment() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faComment} className="icon" />
    </div>
  );
}

export default Comment;
