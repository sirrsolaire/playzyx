import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

export const LayoutView = ({ onGrid, onBox, classNameBox, classNameGrid }) => {
  return (
    <div className="hidden smallTb:flex smallTb:justify-end smallTb:px-4 ">
      <div className="flex gap-2">
        <FontAwesomeIcon
          icon={faTableCellsLarge}
          onClick={onGrid}
          className={classNameGrid}
        />
        <FontAwesomeIcon
          icon={faSquare}
          onClick={onBox}
          className={classNameBox}
        />
      </div>
    </div>
  );
};
