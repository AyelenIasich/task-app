import React from "react";
import { useStorageListener } from "./useStorageListener";
import Modal from "../../components/Modal/Modal";
import PrimaryBtn from "../Buttons/PrimaryBtn/PrimaryBtn";
import "./ChangeAlert.css";

function ChangeAlert({sincronizeTask}) {
  const { show, toggleShow } = useStorageListener(sincronizeTask);

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

export { ChangeAlert };
