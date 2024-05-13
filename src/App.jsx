import React, { useState } from "react";

function App(props) {
  // input에 입력된 값이 p에 출력되도록 코드 작성
  const [name, setName] = useState();
  function handlerUpdate(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handlerUpdate} />
      <p>{name}</p>
    </div>
  );
}

export default App;
