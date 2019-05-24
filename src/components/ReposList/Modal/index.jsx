import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styles from "./ModalStyles";
import "./ModalStyles.scss";

const Modal = props => {
  return (
    <ReactModal
      isOpen={props.show}
      style={styles}
      contentRef={props.setContentRef}
      contentLabel="Repository Preview"
      appElement={document.getElementById("root")}
    >
      <div className="modal-header">
        <h2>Repository details:</h2>
        <button className="modal-close-button" onClick={props.onClose}>
          ⨯
        </button>
      </div>
      <section />
    </ReactModal>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setContentRef: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
