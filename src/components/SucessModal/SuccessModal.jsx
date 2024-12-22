import React from "react";
import Modal from "../Modal/Modal";
import starIcon from "../../assets/svg/starIcon.svg";

import "./SucessModal.css";

function SuccessModal({ handleCloseModal }) {
  return (
    <Modal>
      <div className=" card-form">
        <button
          type="button"
          className="btn-close"
          onClick={handleCloseModal}
        />
        <div className="img-container">
          <img
            src={starIcon}
            alt="Success start image"
            className="empty-todos-image"
          />
        </div>

        <h4 className="text-center pt-3 title-modal">
          You have completed all your tasks!!
        </h4>
      </div>
    </Modal>
  );
}

export default SuccessModal;
