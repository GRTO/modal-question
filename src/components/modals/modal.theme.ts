import { css } from "@emotion/core";

export const ModalStyles = {
  modalOverlay: css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  `,
  modalWrapper: css`
    display: flex;
    justify-content: center;
  `,
  modal: css`
    z-index: 1050;
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    border-radius: 3px;
    max-width: 500px;
    max-height: 70vh;
    padding: 2rem;
  `,
  modalHeader: css`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.05rem solid rgb(211, 211, 211);
  `,
  modalContent: css`
    overflow-y: auto;
  `,
  modalCloseButton: css`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
  `,
};
