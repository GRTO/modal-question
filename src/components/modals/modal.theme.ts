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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  `,
  modal: css`
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  `,
  modalHeader: css`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.05rem solid rgb(211, 211, 211);
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
