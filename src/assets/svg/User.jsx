import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function User() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faUser} className="icon" />
    </div>
  );
}

export default User;
