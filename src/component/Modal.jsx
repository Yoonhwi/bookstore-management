const Modal = ({ modalopen, closeModal, content }) => {
  return (
    <>
      {modalopen && (
        <div className="modal">
          <div className="modal_body">
            <button className="modalCloseBtn" onClick={closeModal}>
              ✖
            </button>
            <div className="modal_content">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
