import React from "react";
import { useState } from "react";
import { ModalWrapper } from "../components/modals/modals";
import { useSpring, animated } from "react-spring";

/**
 * This a custom hook to handle the status of the modal.
 * @param content It is a JSX.Element that the user want to render in the modal.
 * @returns an object with with JSX.Element that is the modal itself, the hide
 * and show modal functions.
 */
export const useModal = (content: JSX.Element) => {
  /**
   * Local state to `show` and `hide` the modal.
   */
  const [isShowing, setIsShowing] = useState(false);
  /**
   * React-spring hook. It is used to add animation of transition.
   */
  const contentProps = useSpring({
    opacity: isShowing ? 1 : 0,
    marginTop: isShowing ? 500 : -500,
  });

  /**
   * Toggle the modal, `show` or `hide`
   */
  const toggle = () => {
    setIsShowing(!isShowing);
  };
  /**
   * This function opens the modal. It can be called from its parent
   */
  const showModal = () => {
    setIsShowing(true);
  };

  /**
   * This function hides the modal. It can be called from its parent
   */
  const hideModal = () => {
    setIsShowing(false);
  };

  return {
    modal: (
      <>
        {/**This is the animation of the modal when it is appearing */}
        <animated.div style={contentProps}>
          {/**Here is the modal wrapper, the HOC. So we use the same style with different content */}
          <ModalWrapper isShowing={isShowing} hide={toggle}>
            {content}
          </ModalWrapper>
        </animated.div>
      </>
    ),
    showModal,
    hideModal,
  };
};

export default useModal;
