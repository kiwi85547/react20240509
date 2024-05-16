import React, { useState } from "react";

// function MyButton(props) {
//   return <button>{props.children}</button>;
// }
//
function MyButton({ children }) {
  const [bgColor, setBgColor] = useState();

  function handleMouseEnter() {
    setBgColor("green");
  }

  function handleMouseLeave() {
    setBgColor("");
  }

  return (
    <button
      style={{ background: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

function App(props) {
  return (
    <div>
      <MyButton>클릭1</MyButton>
      <MyButton>클릭2</MyButton>
    </div>
  );
}

export default App;
