import React from "react";
import useModal from "./hooks/useModal";

const App = () => {
  const { modal, showModal } = useModal(<div>I'm a modal!</div>);
  return (
    <div>
      <div>This the new page</div>
      <button onClick={showModal}>Show Modal</button>
      {modal}
    </div>
  );
};

export default App;
