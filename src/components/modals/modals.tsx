import React from "react";
import ReactDOM from "react-dom";
import { ModalStyles } from "./modal.theme";

/**
 * This is a high order component (HOC) that render and the animation of a modal
 * @param isShowing The modal is going to be shown or not
 * @param hide A function that hides the curreent modal
 * @param children It is the content of the modal
 * @returns return a JSX.Element or null if the modal doens't have to be rendered.
 */
export const ModalWrapper: React.FC<{
  isShowing: boolean;
  hide: (event: React.MouseEvent) => void;
}> = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          {/**This is for the background color (Gray) */}
          <div css={ModalStyles.modalOverlay} />
          {/**This section is for the modal itself */}
          <div css={ModalStyles.modalWrapper}>
            {/**Modal Container */}
            <div css={ModalStyles.modal}>
              {/**Modal header */}
              <div css={ModalStyles.modalHeader}>
                <div>Modal Header</div>
                <div css={ModalStyles.modalCloseButton} onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
              {/**Modal Content */}
              <div css={ModalStyles.modalContent}>{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
