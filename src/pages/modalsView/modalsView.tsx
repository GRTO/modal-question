import React from "react";
import useModal from "../../hooks/useModal";
import {
  modalContentSmall,
  modalContentMedium,
  modalContentHuge,
} from "./modalsView.constant";

const ModalView = () => {
  const { modal: modalSmall, showModal: showModalSmall } = useModal(
    modalContentSmall
  );
  const { modal: modalMedium, showModal: showModalMedium } = useModal(
    modalContentMedium
  );
  const { modal: modalHuge, showModal: showModalHuge } = useModal(
    modalContentHuge
  );
  return (
    <>
      <div>
        <div>Modal with few information</div>
        <button onClick={showModalSmall}>Show Modal - Few Information</button>
      </div>
      <div>
        <div>Modal with information (Medium Size)</div>
        <button onClick={showModalMedium}>Show Modal - Information</button>
      </div>
      <div>
        <div>Modal with huge information (Huge Size)</div>
        <button onClick={showModalHuge}>
          Show Modal - A lot of Information
        </button>
      </div>
      {/** Portal Components */}
      {modalSmall}
      {modalMedium}
      {modalHuge}
    </>
  );
};

export default ModalView;
