import React, { createContext, useContext, useState } from "react";

const TextContext = createContext(null);

function MyInput() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => textHandler.updateText(e.target.value)}
      />
      <p>{textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <p>{textHandler.text}</p>
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
      {/*value가 객체가 됨. value는 string이 아니어도 됨. 모든지 될 수 있음*/}
      <TextContext.Provider value={{ text, updateText: handleUpdateText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

export default App;
