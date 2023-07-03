const Modal = ({ modalopen, closeModal, content }) => {
  return (
    <>
      {modalopen && (
        <div className="modal">
          <div className="modal_body">
            <button className="modalCloseBtn" onClick={closeModal}>
              ✖
            </button>
            <div className="loginmodal">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
