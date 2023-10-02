import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const LayoutView = ({ onGrid, onBox }) => {
  const layout = useSelector((state) => state.layout.layout);
  const postLayout = useSelector((state) => state.layout.postLayout);

  return (
    <div className="smallTb:flex smallTb:justify-end smallTb:px-4 hidden ">
      <div className="flex gap-2">
        <FontAwesomeIcon
          icon={faTableCellsLarge}
          onClick={onGrid}
          className={`cursor-pointer rounded-md bg-second-color px-2 py-1 text-3xl text-white opacity-50 transition-all duration-200 hover:opacity-100 ${
            (layout === "grid" || postLayout === "grid") &&
            "smallTb:opacity-100"
          }`}
        />
        <FontAwesomeIcon
          icon={faSquare}
          onClick={onBox}
          className={`cursor-pointer rounded-md bg-second-color px-2 py-1 text-3xl text-white opacity-50 transition-all duration-200 hover:opacity-100 ${
            (layout === "box" || postLayout === "box") && "smallTb:opacity-100"
          }`}
        />
      </div>
    </div>
  );
};
