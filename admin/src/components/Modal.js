import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Modal";

const Modal = () => {
  const { showModal, setShowModal, modalContent } = useAppContext();
  return (
    showModal && (
      <Wrapper>
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content">{modalContent}</div>
        </div>
      </Wrapper>
    )
  );
};
export default Modal;
