import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function Calendar() {
  return (
    <div className="iconWrapper">
      <FontAwesomeIcon icon={faCalendarDays} className="icon" />
    </div>
  );
}

export default Calendar;
