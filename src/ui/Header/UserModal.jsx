import { ConfigProvider, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen } from "../../reducers/modalSlice.js";
import { LoginModal } from "../Auth/LoginModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { RegisterModal } from "../Auth/RegisterModal.jsx";

export const UserModal = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const modalType = useSelector((state) => state.modal.modalType);
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(setIsModalOpen(false));
  };
  const handleCancel = () => {
    dispatch(setIsModalOpen(false));
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              paddingContentHorizontalLG: 0,
              paddingMD: 0,
              contentBg: "#242424",
            },
          },
        }}
      >
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closeIcon={false}
          footer={false}
          centered={true}
        >
          <div className="relative">
            {modalType === "login" && <LoginModal />}
            {modalType === "register" && <RegisterModal />}
            <FontAwesomeIcon
              icon={faX}
              className="absolute right-4 top-3 cursor-pointer text-xl text-white transition-colors duration-200 hover:text-red-500"
              onClick={() => dispatch(setIsModalOpen(false))}
            />
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};
