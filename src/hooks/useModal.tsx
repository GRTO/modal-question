import React from "react";
import { useState } from "react";
import { ModalWrapper } from "../components/modals/modals";

/**
 * This a custom hook to handle the status of the modal.
 * @param content It is a JSX.Element that the user want to render in the modal.
 * @returns an object with with JSX.Element that is the modal itself, the hide
 * and show modal functions.
 */
export const useModal = (content: JSX.Element) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const showModal = () => {
    setIsShowing(true);
  };

  const hideModal = () => {
    setIsShowing(false);
  };
  return {
    modal: (
      <ModalWrapper isShowing={isShowing} hide={toggle} children={content} />
    ),
    showModal,
    hideModal,
  };
};

export default useModal;
