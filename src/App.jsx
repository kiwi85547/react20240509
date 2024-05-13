import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
  // event를 e로 줄여서 씀
  function handleUpdateText(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  return (
    <div>
      {/* EventHandler에 들어가는 함수는 handle...를 따름*/}
      <input type="text" onChange={handleUpdateText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
