import React from "react";
import { withStorageListener } from "./withStorageListener";
import Modal from "../../components/Modal/Modal";
import "./ChangeAlert.css";
import PrimaryBtn from "../Buttons/PrimaryBtn/PrimaryBtn";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <Modal>
        <section className="card-sincronize py-5">
          <p>
            Upps, it seems you changed your tasks in another tab or browser
            window.
          </p>
          <p className="pb-2 bold">Do you want to sync your tasks?</p>
          <PrimaryBtn label="Yes, sincronize" onClick={toggleShow} />
        </section>
      </Modal>
    );
  } else {
    return null;
  }
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
