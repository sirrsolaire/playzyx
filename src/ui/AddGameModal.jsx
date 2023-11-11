import ProfileInputFilter from "./ProfileInputFilter.jsx";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setGameQuery, setSearchModal } from "../reducers/modalSlice.js";
import useSearch from "../hooks/useSearch.js";
import { AddGameSearchResults } from "./AddGameSearchResults.jsx";
import { useEffect } from "react";

const AddGameModal = () => {
  const addGameQuery = useSelector((state) => state.modal.addGameQuery);
  const dispatch = useDispatch();
  const { data, isLoading } = useSearch({ addGameQuery });

  const closeModal = () => {
    dispatch(setSearchModal(false));
    document.body.classList.remove("overflow-hidden");
  };

  const handleAddGame = (e) => {
    dispatch(setGameQuery(e.target.value));
  };

  const handleEscKeyPress = (event) => {
    if (event.key === "Escape") {
      dispatch(setSearchModal(false));
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 overflow-y-auto bg-body-color">
      <div className="relative mx-auto max-w-[1000px] px-4 pt-20">
        <ProfileInputFilter
          placeholder="Search Game"
          value={addGameQuery}
          onChange={handleAddGame}
        />
        <Icon
          icon="zondicons:close-outline"
          className="absolute right-3 top-4 cursor-pointer text-3xl opacity-50 transition-all duration-200 hover:opacity-100"
          onClick={closeModal}
        />
        <AddGameSearchResults />
      </div>
    </div>
  );
};

export default AddGameModal;
