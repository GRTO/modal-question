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
  children: JSX.Element;
}> = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div css={ModalStyles.modalOverlay} />
          <div css={ModalStyles.modalWrapper}>
            <div css={ModalStyles.modal}>
              <div css={ModalStyles.modalHeader}>
                <div>Modal Header</div>
                <div css={ModalStyles.modalCloseButton} onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;
