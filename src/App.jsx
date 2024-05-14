import React, { useState } from "react";

function MyInput({ text, onChange }) {
  return (
    <div>
      <input type="text" onClick={(e) => onChange(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

function MyText({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }
  return (
    <div>
      <MyInput text={text} onChange={handleUpdateText} />
      <MyText text={text} />
    </div>
  );
}

export default App;
