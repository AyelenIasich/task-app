import React from "react";
import Modal from "../Modal/Modal";
// import { ReactComponent as StarSuccessSVG } from "../../assets/svg/starIcon.svg";
import "./SucessModal.css";

function SuccessModal({ handleCloseModal }) {
  return (
    <Modal>
      <div className="card-form">
        <button
          type="button"
          className="btn-close"
          onClick={handleCloseModal}
        />
        {/* <StarSuccessSVG /> */}
        <h4 className="text-center pt-3">
          You have completed all your tasks!!
        </h4>
      </div>
    </Modal>
  );
}

export default SuccessModal;
